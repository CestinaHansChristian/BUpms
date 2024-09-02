<template>
  <div class="wrapper md:flex">
    <div class="sm:flex sm:w-screen grid w-full">
      <div class="sidebar-container sm:w-1/2 grid h-full sm:h-screen ">
        <LoginSideBarLogin></LoginSideBarLogin>
      </div>
      <div class="login-form-container h-screen grid w-full">
        <LoginForm></LoginForm>
      </div>
    </div>
  </div>
</template>
<script setup>
  onBeforeMount(()=> {
    const pb = usePocketbase()
    definePageMeta({
      
    })
  })
  // if (pb.authStore.model) {
  //   return navigateTo('/client')
  // }
</script>
<style scoped>
.bu-assets {
  pointer-events: none;
}
</style>