// logout user
export const logoutUser = async () => {

    const { $pb } = useNuxtApp()

    $pb.authStore.clear()
    return await navigateTo('/')
}