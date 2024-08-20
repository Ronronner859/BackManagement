import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => {
    {
      return {
        count: 100
      }
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },
  actions: {
    changeCounterAction(newCounter) {
      this.count = newCounter
    }
  }
})

export { useCounterStore }
