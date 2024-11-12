export default defineNuxtRouteMiddleware(async (to, from) => {

  const { $pb } = useNuxtApp();

  console.log("Model", $pb.authStore.model)

  if ($pb.authStore.model === null) {
    return await navigateTo("/");
  }
});
