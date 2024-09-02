import PocketBase from 'pocketbase'

const pb = new PocketBase('https://bupms.pockethost.io')

export const usePocketbase = () => {
  const listener = pb.authStore.onChange(() => {
    if (pb.authStore.model) {
      console.log('logged in')
    } else {
      console.log('logged out')
    }
  })

  return pb
}
