<template>
    <!-- background color -->
    <!-- <nav class="">
        <header class="space-x-3">
          <nuxt-link to="/">Home</nuxt-link>
          <nuxt-link to="/Client">client</nuxt-link>
          <nuxt-link to="/Admin">admin</nuxt-link>
          <nuxt-link to="/Officer">officer</nuxt-link>
        </header>
    </nav> -->
    <!-- <p>default nav</p> -->
    <div class="bg-slate-200">
        <slot />
        <Footer>
        </Footer>
    </div>
</template>
<script>
export default {

}
</script>