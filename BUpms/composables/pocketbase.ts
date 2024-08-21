import PocketBase from 'pocketbase'

const pb = new PocketBase('https://bupms.pockethost.io')

export const usePocketbase = () => {
  return pb
}
