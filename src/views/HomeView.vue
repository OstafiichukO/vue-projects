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
        <button @click="handleClick">stop watching</button>

        <!-- <PostList v-if="showPosts" :posts="posts" /> -->
        <!-- <button @click="showPosts = !showPosts">toggle posts</button>
        <button @click="posts.pop()">delete a post</button> -->

        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">
            <PostList :posts="posts" />
        </div>
        <div v-else>Loading...</div>
    </div>
</template>

<script>
import { ref, reactive, computed } from '@vue/reactivity';
import { watch, watchEffect } from '@vue/runtime-core';

import PostList from '../components/PostList.vue'

export default {
    name: 'HomeView',
    components: { PostList },
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

        const stopWatch = watch(search, () => { console.log('watch function ran') })

        const stopEffect = watchEffect(() => { console.log('watchEffect function ran', search.value) })

        const matchingNames = computed(() => {
            return names.value.filter(name => name.includes(search.value))
        })

        const handleClick = () => {
            stopWatch()
            stopEffect()
        }
        //composition
        // const posts = ref([
        //     { title: 'Welcome to the blog', body: 'lorem ipsum lorem ipsum', id: 1 },
        //     { title: 'Top 5 css tips', body: 'lorem ipsum lorem ipsum', id: 2 }
        // ])
        const showPosts = ref(true)
        //fetcheng data
        const posts = ref([])
        const error = ref(null)

        const load = async () => {
            try {
                let data = await fetch('http://localhost:3000/posts')
                if (!data.ok) {
                    throw Error('No data available')
                }
                posts.value = await data.json()
            }
            catch (err) {
                error.value = err.message
                console.log(error.value)
            }
        }
        load()

        return { userOne, userTwo, updateUserOne, updateUserTwo, names, search, matchingNames, handleClick, posts, showPosts, error, load }
    }
}
</script>
