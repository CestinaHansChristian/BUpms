export default defineNuxtRouteMiddleware((to, from) => {

    const store = useMyAuthStoreStore()

    const pb = usePocketbase()
    if (pb.authStore.model) {
        store.setIsLoggedIn(true)
    } else {
        store.setIsLoggedIn(false)
    }
})
