export default defineNuxtRouteMiddleware((to, from) => {
    const pb = usePocketbase();
    if (pb.authStore.model?.role !== 'admin') {
        console.log('not admin')
        return navigateTo('/')
    }
})
