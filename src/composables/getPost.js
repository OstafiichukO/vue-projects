import { ref } from '@vue/reactivity';

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts/' + id)
            if (!data.ok) {
                throw Error('This post does not exist')
            }
            post.value = await data.json()
        }
        catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    return { post, error, load }
}

export default getPost