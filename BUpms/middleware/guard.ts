export default defineNuxtRouteMiddleware(async (to, from) => {

  const { $pb } = useNuxtApp();

  const model = $pb.authStore.model
  if(model) {
    // console.log('user logged in')
  } else {
    // console.log('no user logged in')
    return navigateTo('/')
  }
});
