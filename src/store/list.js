import { defineStore } from 'pinia';
/** 访问平级store */
import { useCounter } from './counter';

export const useList = defineStore('list', {
  state: () => ({
    ls: [{ id: -1, name: 'This is Pinia' }],
    recyclList: [],
  }),

  getters: {
    // recyclList: (state) => state.recyclList
  },

  actions: {
    addItem(item) {
      const obj = {
        id: Math.ceil(Math.random() * 1000),
        name: item,
      };
      this.ls.push(obj);

      /** 操作counter */
      const c = useCounter();
      c.increment()
    },

    deleteItem(item) {
      this.ls.splice();
      const i = findItemIndex(this.ls, item);
      const iItem = this.ls.find((it) => it.id === item.id);
      this.recyclList.push(iItem);
      this.ls.splice(i, 1);
    },

    /** 彻底清除 */
    async clearItem(item) {
      await sleep()
      const i = findItemIndex(this.recyclList, item);
      this.recyclList.splice(i, 1);
    },
  },
});

function findItemIndex(list, row) {
  return list.findIndex((it) => it.id === row.id);
}


/** 延迟调用 */
function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 1000)
  })
}