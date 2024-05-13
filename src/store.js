import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    newRail: null,
    newDrawer: null
  }),
})
