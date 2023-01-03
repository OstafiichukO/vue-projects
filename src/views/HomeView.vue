<template>
  <div class="home">
    <h1>Home</h1>
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';


export default {
  name: 'HomeView',
  setup() {
    let name = 'Alex';
    let age = 40;

    const p = ref(null)

    const handleClick = () => {
      console.log(p, p.value)
      p.value.classList.add('test')
    };
    return { name, age, handleClick, p }
  }
}
</script>
