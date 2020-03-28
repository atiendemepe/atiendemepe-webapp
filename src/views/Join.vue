<template>
  <navigation-layout>
    <loading :loading="form.loading" :progress="form.progress" />
    <section class="section">
      <div class="container">
        <h4 class="title is-4 has-text-centered">Crear cuenta</h4>
        <form @submit.prevent="submit()">
          <div class="field">
            <div class="control">
              <input class="input" type="text" v-model="$v.form.name.$model" placeholder="Nombres" />
            </div>
            <p v-if="$v.form.name.$dirty && $v.form.name.$invalid" class="help is-danger">Verifique sus nombes</p>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" type="text" v-model="$v.form.lastname.$model" placeholder="Apellidos" />
            </div>
            <p v-if="$v.form.lastname.$dirty && $v.form.lastname.$invalid" class="help is-danger">Verifique sus apellidos</p>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" type="text" v-model="$v.form.email.$model" placeholder="Correo electrónico" />
            </div>
            <p v-if="$v.form.email.$dirty && $v.form.email.$invalid" class="help is-danger">El correo no es válido</p>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" type="password" v-model="$v.form.password.$model" placeholder="Contraseña" />
              <p v-if="$v.form.password.$dirty && $v.form.password.$invalid" class="help is-danger">El tamaño mínimo para la contraseña es 8</p>
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input" type="password" v-model="$v.form.confirmPassword.$model" placeholder="Confirmar contraseña" />
            </div>
            <p v-if="$v.form.confirmPassword.$dirty && $v.form.confirmPassword.$invalid" class="help is-danger">La contraseñas no son las mismas</p>
          </div>
        </form>
        <div class="content">
          <p class="has-text-centered">¿Ya tienes cuenta? Ingresa <router-link to="login">aquí</router-link></p>
        </div>
        <button type="submit" @click="submit" class="button is-primary is-fullwidth is-rounded">Crear cuenta</button>
      </div>
    </section>
  </navigation-layout>
</template>

<script>
// @ is an alias to /src
//import auth from '@/service/auth'
import { required, minLength, email } from 'vuelidate/lib/validators'
import NavigationLayout from '@/views/layout/NavigationLayout.vue'
import Loading from '@/views/components/Loading.vue'

export default {
  name: 'Join',
  data() {
    return {
      form: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        loading: false,
        progress: 0
      }
    }
  },
  validations: {
    form: {
      name: {
        required
      },
      lastname: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      },
      confirmPassword: {
        required,
        minLength: minLength(8)
      }
    }
  },
  mounted() {
  },
  methods: {
    async submit() {
      this.$v.$touch()
      this.form.loading = true
      setTimeout(() => {
        this.form.progress = 100
        this.form.loading = false
      }, 2000)
      /*
      if (!this.$v.$invalid)
        await auth.createUser(this.form)*/
    }
  },
  components: {
    NavigationLayout,
    Loading
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