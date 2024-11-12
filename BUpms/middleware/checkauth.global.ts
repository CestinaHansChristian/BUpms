export default defineNuxtRouteMiddleware((to, from) => {

    const store = useMyAuthStoreStore()

    const pb = usePocketbase()
    if (pb.authStore.model) {
        console.log('User is logged in')
        store.setIsLoggedIn(true)
        store.setUser(pb.authStore.model)
    } else {
        console.log('User is not logged in')
        store.setIsLoggedIn(false)
        store.setUser(null)
    }
})
