// logout user
const pb = usePocketbase()
export const logoutUser = () => {
    pb.authStore.clear()
    navigateTo('/')
}