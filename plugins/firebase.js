import firebase from 'firebase/app'
import 'firebase/auth'

export default (context, inject) => {
  const firebaseApp = firebase.initializeApp(context.$config.firebase.config)

  const auth = firebase.auth()

  // Inject the firebaseApp and auth instance into the context as $firebaseApp and $auth
  inject('firebaseApp', firebaseApp)
  inject('auth', auth)
}
