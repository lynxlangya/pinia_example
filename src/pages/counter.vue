<template>
  <section>
    <h2>{{ count }}</h2>
    <h2>{{ computedCount }}</h2>
    <h2>{{ doubleCount }}</h2>
    <button @click="_handleIncrement">+</button>&nbsp;
    <button @click="c.decrement()">-</button>&nbsp;
    <button @click="_handleReset">reset</button>
  </section>
</template>
<script setup>
  import { computed } from 'vue';
  import { useCounter } from '../store/counter';
  import { storeToRefs } from 'pinia';

  const c = useCounter();

  /**
   * ❌ 不可行，破坏了响应式
   * const { count, doubleCount } = c
   */

  const { count, doubleCount } = storeToRefs(c);

  console.log(c);
  console.log(c.$state);

  const computedCount = computed(() => count);

  /** 渲染中 */
  // c.$patch(c.count++)

  function _handleIncrement() {

    // c.increment()
    
    /** 直接操作store数据 */
    c.$patch(c.count++)

    /** 调用action方法 */
    c.$patch(c.increment)
  }

  function _handleReset() {
    c.$reset(); 
  }
</script>
