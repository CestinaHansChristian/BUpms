export default defineNuxtRouteMiddleware(async (to, from) => {
  const pb = usePocketbase();
  if (pb.authStore.model?.role !== "admin") {
    console.log("not admin");
    await navigateTo("/");
  }
});
