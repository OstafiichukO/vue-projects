<template>
    <h1>{{ title }}</h1>
    <p>Try this</p>
    <teleport to=".modals" v-if="showModal">
        <Modal theme="sale" @close="togleModal">
            <template v-slot:links>
                <a href="#">Sign up now</a>
                <a href="#">read more info</a>
            </template>
            <h1>Sign up for a Giveaway!</h1>
            <p>Grab your half price gift now!</p>
        </Modal>
    </teleport>

    <div v-if="showModalTwo">
        <Modal @close="togleModalTwo">
            <h1>Author: Oleksii</h1>
            <p>All rights reserved</p>
        </Modal>
    </div>
    <button @click="togleModal">Open modal</button>
    <button @click="togleModalTwo">Open modal two</button>
</template>

<script>
import Modal from './components/MainModal.vue'
export default {
    name: 'App',
    components: { Modal },
    data() {
        return {
            title: 'Welcome to Your Vue.js App',
            showModal: false,
            showModalTwo: false
        }
    },
    methods: {
        togleModal() {
            this.showModal = !this.showModal
        },
        togleModalTwo() {
            this.showModalTwo = !this.showModalTwo
        }
    }
}
</script>

<style>
#app,
.modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
}
</style>
