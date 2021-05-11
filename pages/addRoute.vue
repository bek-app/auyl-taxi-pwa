<template>
  <b-container class="container">
    <!-- <iframe
      class="mt-2"
      src="https://www.google.com/maps/d/embed?mid=1TPhXvmotMAUOpO3fqw9G02fKulDeFrmz"
      width="100%"
      height="600"
    ></iframe> -->

    <b-form-input
      v-model="directionFrom"
      placeholder="Қай жерден?"
    ></b-form-input>
    <b-form-input v-model="directionTo" placeholder="Қай жаққа?"></b-form-input>
    <b-form-input v-model.number="price" placeholder="Бағасы"></b-form-input>
    <b-button block variant="warning" @click="sendOrder">Жіберу</b-button>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      directionTo: '',
      directionFrom: '',
      price: null,
    }
  },
  mounted() {},
  methods: {
    sendOrder() {
      if (!this.directionTo || !this.directionFrom || !this.price) return
      const payload = {
        directionTo: this.directionTo,
        directionFrom: this.directionFrom,
        price: this.price,
      }
      this.$store.dispatch('addroute/createOrder', payload)
    },
  },
}
</script>
<style scoped>
.container {
  max-width: 425px;
  width: 100%;
}
</style>
