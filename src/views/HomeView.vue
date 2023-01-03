<template>
    <div class="home">
        <h1>Home</h1>
        <h2>Refs</h2>
        <p>{{ userOne.name }} - {{ userOne.age }}</p>
        <button @click="updateUserOne">Update user one</button>

        <h2>Reactive</h2>
        <p>{{ userTwo.name }} - {{ userTwo.age }}</p>
        <button @click="updateUserTwo">Update user two</button>

        <h2>Computed</h2>
        <input type="text" v-model="search">
        <p>Search term - {{ search }}</p>
        <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    </div>
</template>

<script>
import { ref, reactive, computed } from '@vue/reactivity';


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
        //computed
        const search = ref('')
        const names = ref(['alex', 'bruno', 'peach', 'koopa', 'bowaser', 'yoshi', 'mario'])

        const matchingNames = computed(() => {
            return names.value.filter(name => name.includes(search.value))
        })

        return { userOne, userTwo, updateUserOne, updateUserTwo, names, search, matchingNames }
    }
}
</script>
