<template>
  <section>
    <img src="./assets/logo.svg" alt="" width="66">
    <h1>Pinia</h1>
    <Counter />
    <hr>
    <List />
  </section>
</template>

<script>
import Counter from './pages/counter'
import List from './pages/list'

export default {
  name: 'App',
  components: {
    Counter,
    List
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
