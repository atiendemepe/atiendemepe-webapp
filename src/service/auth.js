import store from '@/store'
import router from '@/router'
import * as firebase from 'firebase/app'
import 'firebase/auth'

class Auth {

  async createUser({ email, password }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
    } catch(e) {
      throw new Error('No se pudo crear al usuario')
    }
  }

  async login(email, password) {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  }

  // async processThirdPartyLogin () {
  //   try {
  //     const result = await firebase.auth().getRedirectResult()
  //     if (result)
  //       await this.onAuthStateChanged(result.user)
  //     else
  //       throw new Error('Login first')
  //     return true
  //   } catch (e) {
  //     return false
  //   }
  // }

  onAuthStateChanged(user) {
    console.log('user changed')
    if (user) {
      console.log('found user')
      const { displayName, email } = user
      store.dispatch('auth/authenticate', {
        name: displayName ? displayName : 'Jhon Doe',
        email
      }).then(() => {
        if (router.currentRoute.name == 'login' || router.currentRoute.name == 'join')
          router.push({ name: 'home' })
      })
    } else {
      console.log('No user found')
      store.dispatch('auth/logout')
      router.push({ name: 'login' })
    }
  }

  googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }
  
  isLoggedIn() {
    return store.getters['auth/loggedIn'];
  }
}

export default new Auth()