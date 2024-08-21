<template>
  <div class="image-icon-container bg-gradient-to-tl from-sky-500 to to-orange-300 from-10%">
    <div class="bicol-unviversity-logo relative grid place-content-start p-1">
      <div class="logo-wrapper bg-slate-200 rounded-full  w-20 h-20 md:w-32 md:h-32">
        <img src="assets/BU_logo.png" alt="splash_image" class="object-contain p-2 bu-assets w-20 h-20 md:w-32 md:h-32">
      </div>
    </div>
    <div class="image-assets sm:w-full ">
      <div class="splash-art-container m-4 space-y-6 grid place-items-center">
        <div class="img-container">
          <img src="assets/Splash-Art.png" alt="" class="object-content bu-assets h-full w-36 md:w-full">
        </div>
        <div class="description-container text-white font-medium tracking-wider">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dicta, numquam harum quis eos hic fuga
          dignissimos eveniet quae placeat?
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
    console.log(this.$auth)
  }
}
</script>