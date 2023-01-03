<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
    <button @click="age++">increase age</button>
    <input type="text" v-model="name">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';


export default {
  name: 'HomeView',
  setup() {
    const name = ref('Alex');
    const age = ref(40);

    // const p = ref(null)

    const handleClick = () => {
      name.value = 'Luigi'
      age.value = 30
    };
    return { name, age, handleClick }
  }
}
</script>
