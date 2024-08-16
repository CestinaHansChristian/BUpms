<template>
  <div class="wrapper md:flex">
    <div class="sm:flex sm:w-screen grid w-full">
      <div class="sidebar-container sm:w-1/2 grid h-full">
        <LoginSideBarLogin></LoginSideBarLogin>
      </div>
      <div class="login-form-container h-screen grid w-full">
        <LoginForm></LoginForm>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoginLayout',
}
</script>
<style scoped>
.bu-assets {
  pointer-events: none;
}
</style>