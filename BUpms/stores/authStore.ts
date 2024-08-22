import { defineStore } from 'pinia'

const pb = usePocketbase()

export const useMyAuthStoreStore = defineStore('myAuthStoreStore', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    setIsLoggedIn(value: boolean) {
      this.isLoggedIn = value
    }
  }
})
