<template>
  <b-container class="container">
    <b-navbar class="navbar">
      <a v-b-toggle.sidebar-1 href="#" class="left-arrow">
        <font-awesome-icon class="menu-icon" :icon="['fas', 'arrow-left']" />
      </a>
      <span>Add Route</span>
      <span v-b-toggle.sidebar-1 class=""
        ><img src="~/assets/icons/menu.svg" alt=""
      /></span>
    </b-navbar>
  </b-container>
</template>
<style scoped>
.container {
  max-width: 425px;
  width: 100%;
  height: 100vh;
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
