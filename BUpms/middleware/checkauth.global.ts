export default defineNuxtRouteMiddleware((to, from) => {

    const { $pb } = useNuxtApp()

    console.log($pb.authStore.model)

    if ($pb.authStore.model) {
        console.log('User is logged in')
    } else {
        console.log('User is not logged in')
    }
})
