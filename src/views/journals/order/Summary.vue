<template>
  <layout>
    <section class="section">
      <div class="container" style="padding-top: 25px;">
        <div class="content has-text-centered">
          <h4 class="title is-4">{{$store.getters['restaurant/menu'].name}}</h4>
        </div>
        <div class="columns is-mobile">
          <div class="column">
            <p class="has-text-weight-bold small-title">Tu pedido</p>
          </div>
          <div class="column has-text-right">
            <router-link :to="{ name: 'restaurant', params: { id: $store.getters['restaurant/menu'].id } }">Agregar más</router-link>
          </div>
        </div>
        <!-- <p class="content"><router-link :to="{ name: 'restaurant', params: { id: $store.getters['restaurant/menu'].id } }">Agregar método de pago</router-link></p> -->
      </div>
    </section>
    <nav class="navbar is-white is-fixed-bottom is-hidden-desktop" role="navigation" aria-label="main navigation">
        <div class="navbar-item">
          <button class="button is-success is-fullwidth is-rounded">Realizar pedido</button>
        </div>
    </nav>
  </layout>
</template>

<script>
// @ is an alias to /src
import Layout from './Layout.vue'

export default {
  name: 'Home',
  data() {
    return {
      form: {
        presentation: ''
      }
    }
  },
  mounted() {
    this.$store.dispatch('restaurant/loadRestaurantMenuOptionInfo', { restaurantId: this.$route.params.id, menuOptionId: this.$route.params.optionId });
    this.form.presentation = this.$store.getters['restaurant/currentOption'].presentations[0].name
  },
  methods: {
    onClickSelectPresentation(presentation) {
      this.form.presentation = presentation.name
    }
  },
  components: {
    Layout
  }
}
</script>

<style lang="sass" scoped>

.order-section
  padding-bottom: 25px

.small-title
  padding-bottom: 12px

.section div.container:last-child
  border-bottom: none
</style>