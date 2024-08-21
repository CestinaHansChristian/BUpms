export default defineNuxtRouteMiddleware((to, from) => {
    const pb = usePocketbase()
    if (!pb.authStore.isValid) {
        console.log('not valid')
    } else {
        console.log('valid')
    }
})
