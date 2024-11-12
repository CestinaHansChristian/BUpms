import { useNuxtApp } from "nuxt/app"

export default defineEventHandler(async (event) => {

  const { $pb } = useNuxtApp()
  return $pb.authStore.model
})
