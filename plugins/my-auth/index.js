export default function ({$fire, redirect, store}, inject) {
  const myAuth = new MyAuth($fire, redirect, store)
  inject('myAuth', myAuth)
}

class MyAuth {
  constructor(fire, redirect, store) {
    this.fire = fire
    this.store = store
    this.redirect = redirect
  }

  signUpByEmailWithName(email, password, name) {
    return this.fire.auth.createUserWithEmailAndPassword(
      email, password
    ).then(({user}) => {
      user.updateProfile({
        displayName: name
      })
    })
  }

  loginByEmail(email, password) {
    return this.fire.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.fire.auth.signOut()
  }

  getUser() {
    return this.fire.auth.currentUser;
  }


  loggedIn() {
    return this.store.getters.isLoggedIn
  }
  getToken() {
    return this.auth.strategy.token.get()
  }
}