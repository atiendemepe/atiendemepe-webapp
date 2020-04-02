<template>
  <clean-layout>
    <section class="section">
      <div class="container">
        <h4 class="title is-4 has-text-centered">Ingresar ahora</h4>
        <form>
          <div class="field">
            <div class="control">
              <input class="input" v-model="form.email" type="text" placeholder="Correo electrónico" />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" v-model="form.password" type="password" placeholder="Contraseña" />
            </div>
          </div>
          <div class="content">
            <p><a href="#">¿Olvidate tu contraseña?</a></p>
          </div>
        </form>
        <button class="button is-primary is-fullwidth is-rounded" @click="onClickIngresar">Ingresar</button>
      </div>
      <div class="content">
        <p class="has-text-centered">ó</p>
      </div>
      <div class="container">
        <button class="button is-fullwidth is-rounded" @click="onClickUsingGoogle">Continuar con Google</button>
      </div>
      <div class="content">
        <p class="has-text-centered">¿No tienes cuenta? Ingresa <router-link to="join">aquí</router-link></p>
      </div>
    </section>
  </clean-layout>
</template>

<script>
// @ is an alias to /src
import CleanLayout from '@/views/layout/CleanLayout.vue'

import auth from '@/service/auth'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onClickIngresar() {
      auth.login(this.form.email, this.form.password)
    },
    onClickUsingGoogle() {
      auth.googleLogin()
    }
  },
  components: {
    CleanLayout
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