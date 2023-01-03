<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'

export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        onMounted(() => {
            console.log('Component mounted')
        })
        onUnmounted(() => {
            console.log('Coponent unmounted')
        })
        onUpdated(() => {
            console.log('Component updated')
        })
    },
    // mounted() { console.log('Mounted using options API') }
}
</script>

<style>

</style>