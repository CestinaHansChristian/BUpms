export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const { email, password } = body

  await new Promise((resolve) => setTimeout(resolve, 1000))

  return { email, password }
})
