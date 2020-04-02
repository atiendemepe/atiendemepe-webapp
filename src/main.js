import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import auth from './service/auth'
import Vuelidate from 'vuelidate'

import VueFeather from 'vue-feather';

import * as firebase from 'firebase/app'

import './assets/css/theme.scss'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDSfszcaozKu4VKLrpPTfdP4sL9OuY3yEY",
  authDomain: "atiendeme-pe-1561952307583.firebaseapp.com",
  databaseURL: "https://atiendeme-pe-1561952307583.firebaseio.com",
  projectId: "atiendeme-pe-1561952307583",
  storageBucket: "atiendeme-pe-1561952307583.appspot.com",
  messagingSenderId: "978312703758",
  appId: "1:978312703758:web:800c644627d1413a5b715f"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(auth.onAuthStateChanged)

Vue.use(VueFeather);
Vue.use(Vuelidate)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
