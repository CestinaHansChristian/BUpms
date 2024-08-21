import { defineStore } from 'pinia'

const pb = usePocketbase()

export const useMyAuthStoreStore = defineStore('myAuthStoreStore', {
  state: () => ({
    isLoggedIn: pb.authStore.model,
  }),
  actions: {}
})
