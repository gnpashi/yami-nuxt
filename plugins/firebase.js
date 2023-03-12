import firebase from 'firebase/app'
import 'firebase/auth'
import * as firebaseui from 'firebaseui'


export default (context, inject) => {
  const firebaseApp = firebase.initializeApp(context.$config.firebase.config)

  const auth = firebase.auth()

  const ui = new firebaseui.auth.AuthUI(auth)
  // Inject the firebaseApp and auth instance into the context as $firebaseApp and $auth
  inject('firebaseApp', firebaseApp)
  inject('auth', auth)
  inject('ui', ui)
}
