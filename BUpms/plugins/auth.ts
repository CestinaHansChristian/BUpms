
export default defineNuxtPlugin((nuxtApp) => {
    const pb = usePocketbase()

    return {
        provide: {
            auth: pb.authStore.isValid ? pb.authStore.model : false
        }
    }
})
