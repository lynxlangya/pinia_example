import { defineStore } from 'pinia';

export const useCounter = defineStore('counter', {
  state: () => ({
    count: 0,
  }),

  getters: {
    /** 使用 state，箭头函数访问 */
    // doubleCount: (state) => state.count * 2,

    /** 使用 this，普通函数访问  */  
    doubleCount() {
      return this.count * 2
    }
  },

  actions: {
    increment() {
      this.count++;
    },

    decrement() {
      this.count--;
    },
  },
});
