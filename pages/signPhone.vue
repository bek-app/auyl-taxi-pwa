<template>
  <b-container class="container">
    <b-row>
      <b-col class="mb-3 logo"
        ><a href="#"><img src="~/assets/img/logo-main.svg" alt="" /></a
      ></b-col>
    </b-row>
    <b-row>
      <b-col class="mb-3">
        <vue-tel-input v-model.number="number" class="input"></vue-tel-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mb-3">
        <a href="/verifycode"
          ><b-button shadow-none class="btn" block variant="warning"
            >Жалғастыру</b-button
          ></a
        >
      </b-col>
    </b-row>
    <Privacy />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
    }
  },
}
</script>
<style scoped>
.container {
  max-width: 425px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.logo {
  display: flex;
  justify-content: center;
}
.input {
  padding: 10px;
}
.btn {
  padding: 15px 10px;
  text-transform: uppercase;
}
.btn:hover {
  background-color: #000;
  color: #fff;
}
a:hover {
  color: #000;
  text-decoration: none;
}
.btn:hover,
.btn:focus,
.btn:active {
  box-shadow: none !important;
  border: none;
}
</style>
