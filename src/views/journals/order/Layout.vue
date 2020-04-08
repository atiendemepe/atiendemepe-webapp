<template>
  <div>
    <nav class="navbar is-fixed-top has-background-transparent" :class="{ 'is-transparent': !isPrimary, 'is-primary': isPrimary}" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" @click.prevent="onClickBack" class="navbar-start" aria-label="menu" aria-expanded="false">
          <span class="icon" :class="{ 'has-text-white': isPrimary}">
            <feather type="arrow-left"></feather>
          </span>
        </a>
      </div>
    </nav>
    <slot />
    </div>
</template>
<script>

export default { 
  methods: {
    onClickBack() {
      this.$router.go(-1);
    }
  },
  computed: {
    isPrimary() {
      return this.$route.name === 'summary'
    }
  }
}
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