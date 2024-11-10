export default defineNuxtRouteMiddleware(async (to, from) => {
  const pb = usePocketbase();
  if (!pb.authStore.model) {
    await navigateTo("/");
  }
});
