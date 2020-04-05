<template>
  <home-layout>
    <div class="container">
      Hola {{$store.state.auth.user.name}}!
    </div>
  </home-layout>
</template>

<script>
// @ is an alias to /src
import HomeLayout from '@/views/layout/HomeLayout.vue'

export default {
  name: 'Home',
  created() {
    document.body.classList.add('has-navbar-fixed-top', 'has-navbar-fixed-bottom')
  },
  destroyed() {
    document.body.classList.remove('has-navbar-fixed-top', 'has-navbar-fixed-bottom')
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push({ name: 'login' })
    }
  },
  components: {
    HomeLayout
  }
}
</script>
