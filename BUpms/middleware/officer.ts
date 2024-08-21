export default defineNuxtRouteMiddleware((to, from) => {
    const pb = usePocketbase();
    if (pb.authStore.model?.role !== 'officer') {
        console.log('not officer')
        return navigateTo('/')
    }
})
