import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return { tabKey: 0 }
    },
    actions: {
        setTabKey(index) {
            this.setTabKey = index
        },
    },
})
