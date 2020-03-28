<template>
  <section class="section">
    <div class="container" v-if="!isLoading">
      <h4 class="title is-4 has-text-centered">Ingresar ahora</h4>
      <form>
        <div class="field">
          <div class="control">
            <input class="input" type="text" placeholder="Correo electrónico" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <input class="input" type="password" placeholder="Contraseña" />
          </div>
        </div>
        <div class="content">
          <p><a href="#">¿Olvidate tu contraseña?</a></p>
        </div>
      </form>
      <button class="button is-primary is-fullwidth">Ingresar</button>
    </div>
    <div class="content" v-if="!isLoading">
      <p class="has-text-centered">ó</p>
    </div>
    <div class="container" v-if="!isLoading">
      <button class="button is-fullwidth" @click="onClickUsingGoogle">Continuar con Google</button>
    </div>
    <div class="content" v-if="!isLoading">
      <p class="has-text-centered">¿No tienes cuenta? Ingresa <router-link to="join">aquí</router-link></p>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import auth from '@/service/auth'

export default {
  name: 'Login',
  data() {
    return {
      isLoading: true
    }
  },
  mounted() {
    this.checkAuth()
  },
  methods: {
    async checkAuth() {
      const result = await auth.processThirdPartyLogin()
      if (result) {
        this.$store.dispatch('auth/authenticate', result)
        this.$router.push({ name: 'home' })
        return
      }
      this.isLoading = false
    },
    onClickUsingGoogle() {
      auth.googleLogin()
    }
  }
}
</script>

<style scoped>
.container form {
  margin-top: 20px;
}

.content {
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>