
export default defineNuxtPlugin((nuxtApp) => {
    const store = useMyAuthStoreStore()

    return {
        provide: {
            auth: store.isLoggedIn
        }
    }
})
