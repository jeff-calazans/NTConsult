import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => ({}),
  actions: {
    async fetch(filters: any) {
      console.log(filters)
    }
  },
})

