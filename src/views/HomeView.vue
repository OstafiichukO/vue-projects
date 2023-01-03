<template>
    <div class="home">
        <h1>Home</h1>
        <h2>Refs</h2>
        <p>{{ userOne.name }} - {{ userOne.age }}</p>
        <button @click="updateUserOne">Update user one</button>
        <h2>Reactive</h2>
        <p>{{ userTwo.name }} - {{ userTwo.age }}</p>
        <button @click="updateUserTwo">Update user two</button>
    </div>
</template>

<script>
import { ref, reactive } from '@vue/reactivity';


export default {
    name: 'HomeView',
    setup() {
        const userOne = ref({ name: 'Alex', age: 30 });
        const userTwo = reactive({ name: 'Bruno', age: 36 });


        const updateUserOne = () => {
            userOne.value.age = 35
        }
        const updateUserTwo = () => {
            userTwo.age = 46
        }
        return { userOne, userTwo, updateUserOne, updateUserTwo }
    }
}
</script>
