export default defineNuxtPlugin(nuxtApp => {

    const pb = usePocketbase()

    const authValue = pb.authStore.isValid

    const auth = {
        isAuthenticated: authValue,
        user: authValue ? pb.authStore.model : null
    }

    return {
        provide: {
            auth: auth
        }
    }
})
