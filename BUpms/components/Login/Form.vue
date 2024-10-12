<template>
  <div class="bg-slate-200 relative grid place-items-center">
    <div class="form-container px-2 space-y-3">
      <div class="bu-logo-container grid place-items-center">
        <img src="assets/BU_title.png" alt="" class="object-contain w-60 min-w-40 bu-assets">
      </div>
      <div class="input-fields-container space-y-3">
        <div class="bu-email">
          <input autofocus required type="email" placeholder="EMAIL" v-model="_email"
            class="border-2 rounded-md w-72 p-2 tracking-widest placeholder-shown:font-semibold">
        </div>
        <div class="bu-password relative flex ">
          <input autofocus required :type="isClicked ? 'text' : 'password'" placeholder="PASSWORD"
            class="w-72 tracking-widest border-2 rounded-md p-2 placeholder-shown:font-semibold" v-model="_password">
          <span @click="eye_icon_enable" class="h-full py-1 absolute right-0 w-14 grid place-content-center">
            <IconsEyeEnable></IconsEyeEnable>
          </span>
          <span @click="eye_icon_enable" v-show="isClicked"
            class="h-full py-1 absolute right-0 w-14  grid place-content-center">
            <IconsEyeDisable></IconsEyeDisable>
          </span>
        </div>
        <p>{{ error }}</p>
        <div class="bu-btn-container grid gap-2">
          <button @click="loginFunc" type="submit" :disabled="isLoading"
            class="bg-sky-400 rounded-md disabled:bg-slate-300 p-2 w-full text-white text-base font-semibold tracking-widest hover:bg-sky-500">
            Sign in
          </button>
          <div class="google-function">
            <div class="label-wrapper text-sm uppercase font-mono tracking-wide md:tracking-widest">
              Log in using your account on:
            </div>
            <button @click="googleLogin" class="bg-slate-300 rounded-md p-2 w-full hover:bg-green-500 text-sky-700 hover:text-white">
              <div class="google-btn-container flex place-content-center">
                <IconsGoogleIcon></IconsGoogleIcon>
                <span class=" font-semibold text-base tracking-widest ">Google</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email().endsWith("@bicol-u.edu.ph"),
  password: z.string().min(8)
});

const store = useMyAuthStoreStore();
const pb = usePocketbase();

const isClicked = ref(false);
const teleport_btn = ref(true);
const isLoading = ref(false);
const _email = ref("");
const _password = ref("");
const error = ref("");

const email = computed({
  get: () => _email.value,
  set: (newValue) => {
    _email.value = newValue;
    handleEmailChange(newValue);
  }
});

const eye_icon_enable = () => {
  isClicked.value = !isClicked.value;
};

const display_modal = () => {
  teleport_btn.value = !teleport_btn.value;
};

const handleEmailChange = (newValue: string) => {
  console.log(`Email changed to ${newValue}`);
  // Perform any other actions here
};

const loginFunc = async () => {
  isLoading.value = true;
  try {
    const data = loginSchema.safeParse({ email: _email.value, password: _password.value });
    if (data.error) {
      error.value = data.error.flatten().fieldErrors.email?.[0] || data.error.flatten().fieldErrors.password?.[0] || '';
      return;
    }
    const { email, password } = data.data;
    const auth = await pb.collection('Users_tbl').authWithPassword(email, password)
    if (auth) {
      store.setUser(pb.authStore.model)
      navigateTo(pb.authStore.model?.role === 'student' ? '/client' : pb.authStore.model?.role === 'officer' ? '/officer/projectlist' : pb.authStore.model?.role === 'admin' ? '/admin' : '/');
    }
  } catch (e) {
    console.log(e);
  }
  isLoading.value = false;
};

const googleLogin = async () => {
  pb.authStore.clear()
  const authData = await pb.collection('Users_tbl').authWithOAuth2({ provider: 'google'}) 

  const meta = authData.meta

  if(meta.isNew) {
    console.log(meta)
    const userName = meta.name
    const setLoggedInAcc = {
      // 'username': userName,
      'role': 'student'
    }

    console.log(authData)
    await pb.collection('Users_tbl').update(authData.record.id,setLoggedInAcc)
    navigateTo('/client')
  } else {
    if(pb.authStore.model?.role === 'student') {
      navigateTo('/client')
    } else if(pb.authStore.model?.role === 'officer') {
      navigateTo('/track/projects')
    } else if (pb.authStore.model?.role === 'admin') {
      navigateTo('/admin')
    } else {
      navigateTo('/')
    }
  }
};

onMounted(() => {
  useHead({
    title: "BUpms"
  });
});
</script>