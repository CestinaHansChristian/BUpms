<template>
  <div class="image-icon-container bg-gradient-to-tl from-sky-500 to to-orange-300 from-10% md:pt-1">
    <div class="bicol-unviversity-logo relative grid place-content-start p-1 md:h-28 lg:h-36">
      <div
        class="logo-wrapper bg-slate-200 rounded-full  w-24 h-24 md:w-32 md:h-32 lg:h-36 lg:w-36 md:absolute -right-16 xl:-right-24 z-10 xl:h-52 xl:w-52 xl:top-5">
        <img src="assets/BU_logo.png" alt="splash_image"
          class="object-contain p-2 bu-assets w-24 h-24 md:w-32 md:h-32 lg:h-36 lg:w-36 xl:h-52 xl:w-52">
      </div>
    </div>
    <div class="image-assets sm:w-full ">
      <div class="splash-art-container m-4 space-y-6 grid place-items-center lg:gap-y-5 xl:gap-y-16">
        <div class="img-container">
          <img src="assets/Splash-Art.png" alt="" class="object-content bu-assets h-full w-36 md:w-full">
        </div>
        <div
          class="description-container text-white font-medium mx-2 lg:mx-8 md:text-sm lg:text-base tracking-widest xl:text-2xl">
          Welcome to our platform for submitting project file documents to OSAS!
          Simply upload your files, track their progress, and collaborate efforlessly with our user-friendly interface.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    // console.log(this.$auth)
  }
}
</script>