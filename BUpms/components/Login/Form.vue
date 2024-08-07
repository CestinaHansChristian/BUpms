<template>
    <div class="bg-slate-200 relative grid place-items-center">
      <div class="form-container px-2 space-y-3">
        <div class="bu-logo-container grid place-items-center">
          <img src="assets/BU_title.png" alt="" class="object-contain w-60 min-w-40 bu-assets">
        </div>
        <div class="input-fields-container space-y-3">
          <div class="bu-email">
            <input autofocus required type="email" placeholder="EMAIL" class="border-2 rounded-md w-72 p-2 tracking-widest placeholder-shown:font-semibold">
          </div>
          <div class="bu-password relative flex ">
            <input autofocus required :type="isClicked ? 'text' : 'password'" placeholder="PASSWORD" class="w-72 tracking-widest border-2 rounded-md p-2 placeholder-shown:font-semibold">
            <span @click="eye_icon_enable"  class="h-full py-1 absolute right-0 w-14 grid place-content-center">
              <IconsEyeEnable></IconsEyeEnable>
            </span>
            <span @click="eye_icon_enable" v-show="isClicked" class="h-full py-1 absolute right-0 w-14  grid place-content-center">
              <IconsEyeDisable></IconsEyeDisable>
            </span> 
          </div>
          <div class="bu-btn-container grid gap-2">
            <button @click="display_modal" type="submit" class="bg-sky-400 rounded-md p-2 w-full text-white text-base font-semibold tracking-widest hover:bg-sky-500">Sign in</button>
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
    methods: {
    },
    data() {
      return {
        isClicked: false,
        teleport_btn: true
      }
    },
    mounted() {
      useHead({
        title: "BUpms"
      })
    },
    methods: {
      eye_icon_enable() {
        this.isClicked = !this.isClicked
      },
      display_modal() {
        this.teleport_btn = !this.teleport_btn
      }
    },
  }
</script>
