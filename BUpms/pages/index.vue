<template>
  <div class="wrapper md:flex">
    <div class="sm:flex sm:w-screen grid w-full">
      <div class="sidebar-container sm:w-1/2 grid h-full sm:h-screen">
        <LoginSideBarLogin />
      </div>
      <div v-if="!isLoggedIn" class="login-form-container h-screen grid w-full">
        <LoginForm />
      </div>
      <div v-else
        class="logged-in-container flex flex-col w-full items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <h1 class="text-4xl font-bold text-white mb-8">Welcome back!</h1>
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
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const pb = usePocketbase()
const router = useRouter()
const isLoggedIn = ref(false)

onMounted(() => {
  isLoggedIn.value = !!pb.authStore.model
})

const navigateToRole = () => {
  const role = pb.authStore.model?.role || 'client'
  router.push(`/${role}`)
}

const logout = () => {
  pb.authStore.clear()
  isLoggedIn.value = false
}

definePageMeta({
  middleware: 'auth',
})
</script>

<style scoped>
.bu-assets {
  pointer-events: none;
}
</style>
