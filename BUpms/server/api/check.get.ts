import { usePocketbase } from "~/composables/pocketbase"

export default defineEventHandler(async (event) => {

  const pb = usePocketbase()
  return pb.authStore.model
})
