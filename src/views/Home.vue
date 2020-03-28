<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button class="button" @click="logout">Salir</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push({ name: 'login' })
    }
  },
  components: {
    HelloWorld
  }
}
</script>
