export default defineNuxtRouteMiddleware(async (to, from) => {
  const pb = usePocketbase();
  if (pb.authStore.model?.role !== "officer") {
    console.log("not officer");
    await navigateTo("/");
  }
});
