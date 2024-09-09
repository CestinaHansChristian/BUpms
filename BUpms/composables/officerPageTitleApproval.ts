// dynamic title page
const pb = usePocketbase()
export const documentsReview = () => {
    if(pb.authStore.model) {
        return useHead({
            title: `Officer Approval`
        })
    } else {
        return useHead({
            title: `BUpms!`
        })
    }
}