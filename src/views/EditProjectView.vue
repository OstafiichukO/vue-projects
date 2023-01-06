<template>
    <form @submit.prevent="handleSubmit">
        <label>Title</label>
        <input type="text" v-model="title" required>
        <label>Details</label>
        <textarea v-model="details" required></textarea>
        <button>Update Project</button>
    </form>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            uri: 'http://localhost:3000/projects/' + this.id,
            title: '',
            details: '',
        }
    },
    mounted() {
        fetch(this.uri)
            .then(res => res.json())
            .then(data => {
                this.title = data.title
                this.details = data.details
            }).catch(err => console.log(err))
    },
    methods: {
        handleSubmit() {
            const body = {
                title: this.title,
                details: this.details,
            };
            fetch(this.uri, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            })
                .then((res) => res.json())
                .then(this.$router.push({ name: "Home" }))
                .catch((err) => console.log(err));
        }
    }
}
</script>

<style>

</style>