// dynamic title page

export const userLandingGreet = () => {
    const { $pb } = useNuxtApp()
    if($pb.authStore.model) {
        return useHead({
            title: `Welcome! ${$pb.authStore.model.username}`
        })
    } else {
        return useHead({
            title: `Welcome!`
        })
    }
}