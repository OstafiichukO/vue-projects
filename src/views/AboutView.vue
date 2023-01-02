<!-- <template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod consequuntur fuga distinctio, nostrum
      nisi dolorem corrupti perspiciatis, ducimus commodi quasi voluptatibus voluptas inventore ipsa, odit doloribus?
      Doloribus aut commodi quis assumenda optio temporibus eligendi sed nulla omnis architecto, quam porro esse nemo
      ratione iure provident perspiciatis quasi nisi voluptatibus a nobis! Consequatur saepe quis mollitia veritatis
      quaerat quidem nam, eos incidunt ipsam adipisci ratione eligendi quasi deserunt recusandae eum veniam aperiam
      velit nostrum perspiciatis facilis totam libero ex possimus explicabo. Suscipit in, reiciendis quasi fuga vel
      consequatur laborum dolor. Atque modi eveniet voluptatibus expedita adipisci unde. Provident, quod eaque.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod consequuntur fuga distinctio, nostrum
      nisi dolorem corrupti perspiciatis, ducimus commodi quasi voluptatibus voluptas inventore ipsa, odit doloribus?
      Doloribus aut commodi quis assumenda optio temporibus eligendi sed nulla omnis architecto, quam porro esse nemo
      ratione iure provident perspiciatis quasi nisi voluptatibus a nobis! Consequatur saepe quis mollitia veritatis
      quaerat quidem nam, eos incidunt ipsam adipisci ratione eligendi quasi deserunt recusandae eum veniam aperiam
      velit nostrum perspiciatis facilis totam libero ex possimus explicabo. Suscipit in, reiciendis quasi fuga vel
      consequatur laborum dolor. Atque modi eveniet voluptatibus expedita adipisci unde. Provident, quod eaque.
    </p>
  </div>
</template> -->
<template>
  <div class="about">
    <h1 class="about__title">About Page</h1>
    <p class="about__text">This is the about page!</p>

    <button class="about__button" @click="showModal = true">Show Modal</button>

    <div v-if="showModal" class="modal" @click="showModal = false">
      <div class="modal__content" @click.stop>
        <img class="modal__logo" src="../assets/netflix.png" alt="Netflix logo" />
        <h2 class="modal__title">Modal Title</h2>
        <p class="modal__text">Modal content goes here</p>
        <button class="modal__button" @click="showModal = false">Close</button>
      </div>
    </div>
  </div>
</template>

<style>
.about {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

.about__title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.about__text {
  font-size: 1.2em;
  line-height: 1.5;
}

.about__button {
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5em 1em;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal__content {
  background-color: white;
  border-radius: 4px;
  padding: 2em;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.modal__logo {
  display: block;
  margin: 0 auto;
  width: 150px;
}

.modal__title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 1em;
}

.modal__text {
  font-size: 1.2em;
  line-height: 1.5;
}

.modal__button {
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5em 1em;
}
</style>

<script>
export default {
  name: 'About',
  data() {
    return {
      showModal: false
    }
  }
}
</script>

