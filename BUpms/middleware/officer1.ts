export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $pb } = useNuxtApp();
  
    const model = $pb.authStore.model
  
    // console.log(from.path)
    // console.log(to.path)
    if (model?.role != 'officer1') {
      return await navigateTo('/')
    }
  })
  