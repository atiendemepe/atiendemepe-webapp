<template>
  <layout>
    <section class="section">
      <div class="container order-section has-bottom-border">
        <div class="columns is-mobile">
          <div class="column">
            <div class="content">
              <h4 class="title is-4">{{$store.getters['restaurant/currentOption'].name}}</h4>
              <h6 class="subtitle is-6">{{$store.getters['restaurant/currentOption'].description}}</h6>
            </div>
          </div>
          <div class="column is-narrow">
            <img src="../../../assets/img/samples/bembos-combo1.png" />
          </div>
        </div>
      </div>
      <div class="container order-section has-bottom-border" style="padding-top: 25px">
        <p class="has-text-weight-bold small-title">¿Cuánta hambre tienes?</p>
        <div class="field is-grouped">
        <p class="control" v-for="presentation in $store.getters['restaurant/currentOption'].presentations" :key="presentation.name">
          <button class="button is-rounded-small" :class="{ 'is-primary': form.presentation === presentation.name}" @click="onClickSelectPresentation(presentation)">{{presentation.name}} ({{presentation.price}})</button>
        </p>
        </div>
      </div>
    </section>
    <nav class="navbar is-white is-fixed-bottom is-hidden-desktop" role="navigation" aria-label="main navigation">
        <div class="navbar-item">
          <router-link :to="{ name: 'summary'}" class="button is-primary is-fullwidth is-rounded">Confirmar pedido</router-link>
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