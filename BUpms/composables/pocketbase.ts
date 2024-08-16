import PocketBase from 'pocketbase'

export const usePocketbase = () => {

  const pb = new PocketBase('https://bupms.pockethost.io')

  return pb
}
