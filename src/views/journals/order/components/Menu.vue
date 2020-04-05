<template>
  <div class="menu">
    <section class="section menu-categories">
      <div class="tabs is-small">
        <ul>
          <li v-for="category in $store.getters['restaurant/menu'].categories" 
            :key="category" :class="{ 'is-active': form.category === category}">
            <a @click.prevent="onClickCategory(category)">{{category}}</a>
          </li>
        </ul>
      </div>
    </section>
    <section class="section has-background-light menu-options">
      <div class="container">
        <p class="content has-text-grey-dark chosen-category">{{form.category}}</p>
        <div class="columns is-mobile" v-for="categoryDetail in form.categoryDetails" :key="categoryDetail.id">
          
          <div class="column">
            <h6 class="title is-6">{{categoryDetail.name}}</h6>
            <h6 class="subtitle is-6">{{categoryDetail.description}}</h6>
          </div>
          <div class="column is-narrow">
            <img src="../../../../assets/img/samples/bembos-combo1.png" />
          </div>
          <div class="column is-relative is-narrow">
            <div class="is-vertically-centered"><feather type="chevron-right"></feather></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Menu",
  data() {
    return {
      form: {
        category: '',
        categoryDetails: []
      }
    }
  },
  async mounted() {
    await this.$store.dispatch("restaurant/loadRestaurantMenuInfo", {
      restaurantId: this.$route.params.id
    })
    this.onClickCategory(this.$store.getters['restaurant/menu'].categories[0])
  },
  methods: {
    onClickCategory(category) {
      this.form.category = category
      this.form.categoryDetails = this.$store.getters['restaurant/menu'].categoryDetails[category]
    }
  }
};
</script>

<style lang="sass" scoped>
.menu-categories
  padding-top: 0
  padding-bottom: 0

.menu-options
  padding-top: 12px
  min-height: 100%

.chosen-category
  padding-bottom: 12px
</style>