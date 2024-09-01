export default defineNuxtRouteMiddleware((to, from) => {
    const pb = usePocketbase();
    if (!pb.authStore.model) {
        return navigateTo("/")
    }
})
