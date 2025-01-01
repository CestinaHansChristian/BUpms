<template>
  <div class="wrapper md:flex">
    <div class="sm:flex sm:w-screen grid w-full">
      <div class="sidebar-container hidden md:w-1/2 md:grid h-full sm:h-screen">
        <LoginSideBarLogin />
      </div>
      <div v-if="!$pb.authStore.model" class="login-form-container h-screen grid w-full">
        <LoginForm />
      </div>
      <div v-else
        class="logged-in-container flex flex-col w-full items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 class="md:text-4xl font-bold text-white mb-8">Welcome back!</h1>
        <button @click="navigateToRole"
          class="btn btn-primary mb-4 transform hover:scale-105 transition-transform duration-300 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
          <span class="mr-2">🚀</span>Launch Dashboard
        </button>
        <button @click="logout"
          class="btn btn-secondary transform hover:scale-105 transition-transform duration-300 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
          <span class="mr-2">👋</span>Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
setUserfonts()
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const { $pb } = useNuxtApp()
const router = useRouter()
const isLoggedIn = ref(false)

onMounted(() => {
  isLoggedIn.value = !!$pb.authStore.model
})

const navigateToRole = () => {
  const role = $pb.authStore.model?.role || 'client'
  router.push(role === 'student' ? '/client' : role === 'admin' ? '/admin' : role === 'officer1' ? '/officer1/projects' : role === 'officer2' ? '/officer2/projects' : '/')
  // console.log(role)
}

const logout = () => {
  $pb.authStore.clear()
  isLoggedIn.value = false
  navigateTo('/')
}

useHead({
  title: "BUpms"
})
</script>

<style scoped>
.bu-assets {
  pointer-events: none;
}

.wrapper {
  font-family: "Roboto Condensed";
}
</style>
