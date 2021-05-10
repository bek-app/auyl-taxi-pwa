<template>
  <b-container class="container">
    <b-sidebar id="sidebar-1" title="" shadow>
      <div class="sidebar-menu d-flex flex-column">
        <div class="profile-info">
          <div class="profile-name text-center">Meirambek Zhussipov</div>
          <div class="profile-email text-center">make202006@gmail.com</div>
        </div>
        <div vertical class="menu">
          <a href="addRoute" class="nav d-flex">
            <font-awesome-icon
              class="menu-icon"
              :icon="['fas', 'house-user']"
            />
            <span class="menu-item-title">Басты бет</span>
            <font-awesome-icon
              class="arrow ml-auto"
              :icon="['fas', 'arrow-right']"
            />
          </a>

          <a href="profile" class="nav d-flex">
            <font-awesome-icon class="menu-icon" :icon="['fas', 'user-tie']" />
            <span class="menu-item-title"> Профиль</span>
            <font-awesome-icon
              class="arrow ml-auto"
              :icon="['fas', 'arrow-right']"
            />
          </a>
          <a class="nav d-flex">
            <font-awesome-icon
              class="menu-icon"
              :icon="['fas', 'money-bill-alt']"
            />
            <span class="menu-item-title"> Төлем әдістері</span>
            <font-awesome-icon
              class="arrow ml-auto"
              :icon="['fas', 'arrow-right']"
            />
          </a>
          <a class="nav d-flex">
            <font-awesome-icon
              class="menu-icon"
              :icon="['fas', 'clipboard-list']"
            />
            <span class="menu-item-title"> Тарих</span>
            <font-awesome-icon
              class="arrow ml-auto"
              :icon="['fas', 'arrow-right']"
            />
          </a>
          <a class="nav d-flex">
            <font-awesome-icon
              class="menu-icon"
              :icon="['fas', 'map-marked-alt']"
            />
            <span class="menu-item-title"> Менің мекен жайларым</span>
            <font-awesome-icon
              class="arrow ml-auto"
              :icon="['fas', 'arrow-right']"
            />
          </a>
          <a class="nav d-flex">
            <font-awesome-icon class="menu-icon" :icon="['fas', 'sliders-h']" />
            <span class="menu-item-title"> Баптаулар</span>
            <font-awesome-icon
              class="arrow ml-auto"
              :icon="['fas', 'arrow-right']"
            />
          </a>
          <a class="nav d-flex">
            <font-awesome-icon
              class="menu-icon"
              :icon="['fas', 'info-circle']"
            />
            <span class="menu-item-title"> Онлайн қолдау </span>
            <font-awesome-icon
              class="arrow ml-auto"
              :icon="['fas', 'arrow-right']"
            />
          </a>
          <a class="nav d-flex">
            <font-awesome-icon
              class="menu-icon"
              :icon="['fas', 'sign-out-alt']"
            />
            <span class="menu-item-title"> Шығу</span>
            <font-awesome-icon
              class="arrow ml-auto"
              :icon="['fas', 'arrow-right']"
            />
          </a>
        </div>
      </div>
    </b-sidebar>
  </b-container>
</template>

<script>
export default {}
</script>
<style scoped>
.container {
  max-width: 425px;
  width: 100%;
  height: 100vh;
}

.profile-info {
  border-radius: 50%;
}
.menu {
  margin-top: 50px;
}
.menu .nav {
  display: flex;
  padding: 15px 20px;
  align-items: center;
  color: #000;
  text-decoration: none;
}

.menu .nav:hover {
  background-color: black;
  color: #fff;
  cursor: pointer;
}

.menu-icon {
  margin-right: 15px;
}
.nav .arrow {
  color: #fff;
  font-size: 12px;
}
</style>
