<template>
  <b-container class="container">
    <b-navbar class="navbar">
      <a v-b-toggle.sidebar-1 href="#" class="left-arrow">
        <font-awesome-icon class="menu-icon" :icon="['fas', 'arrow-left']" />
      </a>
      <span>{{ title }}</span>
      <span v-b-toggle.sidebar-1 class=""
        ><img src="~/assets/icons/menu.svg" alt=""
      /></span>
    </b-navbar>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      title: 'addRoute',
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
  align-items: center;
  padding: 15px;
}
.navbar .left-arrow {
  color: #000;
}
</style>
