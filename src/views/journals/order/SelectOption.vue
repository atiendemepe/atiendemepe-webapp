<template>
  <layout>
    <section class="section restaurant-header">
      <div class="container has-bottom-border">
        <div class="columns is-mobile">
          <div class="column">
            <div class="content">
              <h4 class=" title is-4">{{$store.getters['restaurant/currentOption'].name}}</h4>
              <h6 class="subtitle is-6">{{$store.getters['restaurant/currentOption'].description}}</h6>
            </div>
          </div>
          <div class="column is-narrow">
            <img src="../../../assets/img/samples/bembos-combo1.png" />
          </div>
        </div>
      </div>
    </section>
    <Menu />
  </layout>
</template>

<script>
// @ is an alias to /src
import Layout from './Layout.vue'

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('restaurant/loadRestaurantMenuOptionInfo', { restaurantId: this.$route.params.id, menuOptionId: this.$route.params.optionId });
  },
  methods: {},
  components: {
    Layout
  }
}
</script>

<style lang="sass" scoped>
.restaurant-header
  padding-bottom: 7px

.has-bottom-border
  border-bottom: solid 1pt rgba(143,143,171, .3)
  -webkit-background-clip: padding-box
  background-clip: padding-box
</style>