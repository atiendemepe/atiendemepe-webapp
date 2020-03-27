<template>
  <div class="container">
    <h1 class="title">Ingresar ahora</h1>
    <p>Hola</p>
    <button class="button is-primary is-fullwidth">Ingresar</button>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'

const uiConfig = {
  signInSuccessUrl: 'http://localhost:8081/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  tosUrl: 'http://localhost:8081/tos',
  privacyPolicyUrl: 'http://localhost:8081/privacy',
};

export default {
  name: 'Login',
  mounted() {
    let ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }
}
</script>
