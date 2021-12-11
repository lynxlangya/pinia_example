<template>
  <section>
    <input type="text" v-model="inputValue" @keyup.enter="handleAddItem">&nbsp;
    <button @click="handleAddItem">Add</button>&nbsp;
    <button @click="l.$reset()">Reset</button>
    <ul>
      <li v-for="(item, i) in ls" :key="item.id" @mouseover="active = i" @mouseout="active = null">
        <span>{{ item.name }}</span>
        <span @click="handleDeleteItem(item)">
          {{ i === active ? '❌' : ' '}}
        </span>
      </li>
    </ul>
    <hr>
    <h3>回收站♻️ - (异步延迟 1s)</h3>
    <ul v-if="recyclList.length">
      <li v-for="(item, i) in recyclList" :key="item.id" @mouseover="recyclActive = i" @mouseout="recyclActive = null">
        <span>{{ item.name }}</span>
        <span @click="handleClearItem(item)">
          {{ i === recyclActive ? '❌' : ' '}}
        </span>
      </li>
    </ul>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useList } from '../store/list';

const inputValue = ref('');
const active = ref(null);
const recyclActive = ref(null);

const l = useList();

const { ls, recyclList } = storeToRefs(l);

function handleAddItem() {
  if (!inputValue.value) return;
  l.addItem(inputValue.value);
  inputValue.value = '';
}

function handleDeleteItem(item) {
  l.deleteItem(item);
}

const handleClearItem = (item) => {
  l.clearItem(item);
};
</script>
<style>
ul {
  list-style: none;
}

li {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

li span:nth-child(2) {
  cursor: pointer;
}
</style>
