<template>
  <layout>
    <section class="section restaurant-header">
      <div class="container">
        <h5 class="title is-5">{{$store.getters['restaurant/info'].name}}</h5>
        <h6 class="subtitle is-6">{{$store.getters['restaurant/info'].hours}}</h6>
      </div>
    </section>
    <Menu />
  </layout>
</template>

<script>
// @ is an alias to /src
import Layout from './Layout.vue'
//has-navbar-fixed-top has-navbar-fixed-bottom
import { Menu } from './components'

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('restaurant/loadRestaurantInfo', { restaurantId: this.$route.params.id });
  },
  methods: {},
  components: {
    Layout, Menu
  }
}
</script>

<style lang="sass" scoped>
.restaurant-header
  padding-bottom: 7px
</style>