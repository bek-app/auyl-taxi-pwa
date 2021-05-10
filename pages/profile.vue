<template>
  <b-container class="container">
    <Navbar />
    <div class="logo mt-5 text-center">
      <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
      <span>Meirambek</span>
      <p>87472996261</p>
    </div>
    <div class="form">
      <b-form-input
        v-model="name"
        placeholder="Аты-жөніңіз"
        class="mb-2"
      ></b-form-input>
      <b-form-input
        v-model="email"
        class="mb-2"
        type="tel"
        placeholder="Телефоныңыз"
      ></b-form-input>
    </div>
    <b-button class="mb-2" block> Сақтау</b-button>
    <Privacy />
    <Sidebar />
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
    }
  },
}
</script>
<style scoped>
.container {
  max-width: 425px;
  width: 100%;
}
.navbar {
  display: flex;
  justify-content: space-between;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.logo span {
  font-weight: 600;
  font-size: 18px;
}
.logo p {
  font-weight: 300;
  font-size: 14px;
}
</style>
