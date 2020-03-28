<template>
  <section class="section">
    <div class="container">
      <h4 class="title is-4 has-text-centered">Crear cuenta</h4>
      <form>
        <div class="field">
          <label class="label">Nombres</label>
          <div class="control">
            <input class="input" type="text" placeholder="" />
          </div>
        </div>
        <div class="field">
          <label class="label">Apellidos</label>
          <div class="control">
            <input class="input" type="text" placeholder="" />
          </div>
        </div>
        <div class="field">
          <label class="label">Correo electrónico</label>
          <div class="control">
            <input class="input" type="text" placeholder="" />
          </div>
        </div>
        <div class="field">
          <label class="label">Contraseña</label>
          <div class="control">
            <input class="input" type="password" placeholder="" />
          </div>
        </div>
        <div class="field">
          <label class="label">Confirmar contraseña</label>
          <div class="control">
            <input class="input" type="password" placeholder="" />
          </div>
        </div>
      </form>
      <div class="content">
        <p class="has-text-centered">¿Ya tienes cuenta? Ingresa <router-link to="login">aquí</router-link></p>
      </div>
      <button class="button is-primary is-fullwidth">Crear cuenta</button>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
//import auth from '@/service/auth'

export default {
  name: 'Join',
  data() {
    return {}
  },
  mounted() {
  },
  methods: {
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