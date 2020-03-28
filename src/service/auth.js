import store from '../store'
import firebase from 'firebase'

class Auth {

  async processThirdPartyLogin () {
    try {
      const result = await firebase.auth().getRedirectResult()
      const { displayName, email } = result.user
      return {
        name: displayName,
        email
      }
    } catch (e) {
      return false
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