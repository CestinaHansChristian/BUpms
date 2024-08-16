<template>
  <div class="bg-slate-200 relative grid place-items-center">
    <div class="form-container px-2 space-y-3">
      <div class="bu-logo-container grid place-items-center">
        <img src="assets/BU_title.png" alt="" class="object-contain w-60 min-w-40 bu-assets">
      </div>
      <div class="input-fields-container space-y-3">
        <div class="bu-email">
          <input autofocus required type="email" placeholder="EMAIL" v-model="email"
            class="border-2 rounded-md w-72 p-2 tracking-widest placeholder-shown:font-semibold">
        </div>
        <div class="bu-password relative flex ">
          <input autofocus required :type="isClicked ? 'text' : 'password'" placeholder="PASSWORD"
            class="w-72 tracking-widest border-2 rounded-md p-2 placeholder-shown:font-semibold" v-model="password">
          <span @click="eye_icon_enable" class="h-full py-1 absolute right-0 w-14 grid place-content-center">
            <IconsEyeEnable></IconsEyeEnable>
          </span>
          <span @click="eye_icon_enable" v-show="isClicked"
            class="h-full py-1 absolute right-0 w-14  grid place-content-center">
            <IconsEyeDisable></IconsEyeDisable>
          </span>
        </div>
        <div class="bu-btn-container grid gap-2">
          <button @click="loginFunc" type="submit" :disabled="isLoading"
            class="bg-sky-400 rounded-md disabled:bg-slate-300 p-2 w-full text-white text-base font-semibold tracking-widest hover:bg-sky-500">Sign
            in</button>
          <button class="bg-slate-300 rounded-md p-2 w-full hover:bg-green-500 text-sky-700 hover:text-white">
            <div class="google-btn-container flex place-content-center">
              <IconsGoogleIcon></IconsGoogleIcon>
              <span class=" font-semibold text-base tracking-widest ">Google</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      isClicked: false,
      teleport_btn: true,
      isLoading: false,
      _email: "",
      password: ""
    }
  },
  computed: {
    email: {
      get() {
        return this._email
      },
      set(newValue) {
        this._email = newValue
        this.handleEmailChange(newValue)
      }
    }
  },
  methods: {
    eye_icon_enable() {
      this.isClicked = !this.isClicked
    },
    display_modal() {
      this.teleport_btn = !this.teleport_btn
    },
    handleEmailChange(newValue) {
      console.log(`Email changed to ${newValue}`)
      // Perform any other actions here
    },
    async loginFunc() {
      this.isLoading = true
      const data = await $fetch("/api/login", {
        method: "POST",
        body: {
          email: this.email,
          password: this.password
        }
      })
      console.log(data)
      this.isLoading = false
    }
  },
  mounted() {
    useHead({
      title: "BUpms"
    })
  }
}
</script>