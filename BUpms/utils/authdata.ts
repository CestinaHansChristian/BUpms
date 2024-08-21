export default () => {

  const pb = usePocketbase()
  console.log(pb)

  return pb.authStore.model
}
