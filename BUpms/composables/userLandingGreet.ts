// dynamic title page
const pb = usePocketbase()
export const userLandingGreet = () => {
    if(pb.authStore.model) {
        return useHead({
            title: `Welcome! ${pb.authStore.model.username}`
        })
    } else {
        return useHead({
            title: `Welcome!`
        })
    }
}