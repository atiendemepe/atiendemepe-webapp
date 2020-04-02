<template>
  <nav class="navbar is-white is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a
        role="button"
        @click.prevent="onClickBack"
        class="navbar-start"
        aria-label="menu"
        aria-expanded="false"
      >
        <span class="icon">
          <feather type="arrow-left"></feather>
        </span>
      </a>
      <router-link :to="{ name: 'home' }" class="navbar-item">
        <img alt="Atiendeme.pe" src="../../assets/logo.png" width="112" height="28" />
      </router-link>
      <a
        :class="{ 'is-invisible': !$store.getters['auth/loggedIn'], 'is-active': showMenu }"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        @click="onClickMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="{ 'is-active': showMenu }">
      <div class="navbar-end">
        <div class="navbar-item">
          <router-link :to="{ name: 'home' }">Inicio</router-link>
        </div>
        <div class="navbar-item">
          <router-link to="profile">Perfil</router-link>
        </div>
        <div class="navbar-item">
          <a href="#" @click.prevent="onClickLogout">Salir</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    onClickMenu() {
      this.showMenu = !this.showMenu
    },
    onClickLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push({ name: "login" });
    },
    onClickBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="sass" scoped>
.icon
  font-size: 1.7rem
  top: calc(50% - 18px)
  position: absolute
  left: calc(50% - 12px)
.navbar-brand
  .navbar-start
    color: #78849E
    cursor: pointer
    display: block
    height: 3.25rem
    position: relative
    width: 3.25rem
    margin-right: auto

.navbar.is-white
  .navbar-start
    color: #0a0a0a
</style>