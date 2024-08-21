import { z } from "zod"
import { usePocketbase } from "~/composables/pocketbase"

export default defineEventHandler(async (event) => {
  const pb = usePocketbase()
  const query = await readValidatedBody(event, loginSchema.parse)

  const { email, password } = query

  await new Promise((resolve) => setTimeout(resolve, 1000))
  try {
    const auth = await pb.collection("Users_tbl").authWithPassword(email, password)
    return { model: auth.record }
  } catch (e) {
    console.log(e)
    throw createError({
      status: 401,
      message: "Invalid email or password",
    })
  }

})

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})