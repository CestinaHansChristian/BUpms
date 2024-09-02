import { defineStore } from 'pinia'
import type { AuthModel } from 'pocketbase'

const pb = usePocketbase()

export const useMyAuthStoreStore = defineStore('myAuthStoreStore', {
  state: () => ({
    isLoggedIn: false,
    user: null as AuthModel | null
  }),
  actions: {
    setIsLoggedIn(value: boolean) {
      this.isLoggedIn = value
    },
    setUser(user: AuthModel) {
      this.user = user
    }
  }
})
