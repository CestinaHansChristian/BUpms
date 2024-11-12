export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $pb } = useNuxtApp();
  if ($pb.authStore.model?.role !== "admin") {
    console.log("not admin");
    return await navigateTo("/");
  }
});
