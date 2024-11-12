export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $pb } = useNuxtApp();
  if ($pb.authStore.model?.role !== "officer") {
    console.log("not officer");
    return await navigateTo("/");
  }
});
