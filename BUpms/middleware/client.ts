export default defineNuxtRouteMiddleware(async (to,from)=> {
    const { $pb } = useNuxtApp();

    const model = $pb.authStore.model
    if (model?.role != 'student') {
        return await navigateTo('/')
    }
})