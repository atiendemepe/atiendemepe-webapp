<template>
  <div class="menu">
    <section class="section menu-categories">
      <div class="tabs">
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
        <p class="has-text-weight-bold chosen-category">{{form.category}}</p>
        <div class="columns is-mobile" v-for="categoryDetail in form.categoryDetails" :key="categoryDetail.id" @click="onClickMenuOption(categoryDetail)">
          <div class="column">
            <div class="content">
              <p class="is-size-6"><strong>{{categoryDetail.name}}</strong></p>
              <p class="is-size-7">{{categoryDetail.description}}</p>
              <p class="is-size-6 has-text-primary">{{categoryDetail.price}}</p>
            </div>
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
    },
    onClickMenuOption(option) {
      console.log('select', option)
      this.$router.push({ name: 'selectOption', params: {
        id: this.$store.getters['restaurant/info'].id,
        optionId: option.id
      } })
    }
  }
};
</script>

<style lang="sass" scoped>
.menu-categories
  padding-top: 0
  padding-bottom: 12px

  .tabs
    a, ul, li.is-active a
      border: none

    li.is-active a
      color: white
      background-color: #FB4A6F
      border-radius: 20pt

.menu-options
  padding-top: 12px
  min-height: 100%
 
  .columns:not(:last-child)
    border-bottom: solid 1pt rgba(143,143,171, .3)
    -webkit-background-clip: padding-box
    background-clip: padding-box

.chosen-category
  padding-bottom: 12px
</style>