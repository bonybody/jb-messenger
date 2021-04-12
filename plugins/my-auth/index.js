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

  async signUpByEmailWithName(email, password, name) {
    return await this.fire.auth.createUserWithEmailAndPassword(
      email, password
    ).then(({user}) => {
      user.updateProfile({
        displayName: name
      })
    })
  }

  async loginByEmail(email, password) {
    return await this.fire.auth.signInWithEmailAndPassword(email, password);
  }

  async logout() {
    return await this.fire.auth.signOut()
  }

  async getUser() {
    return await this.fire.auth.currentUser;
  }


  loggedIn() {
    return this.store.getters.isLoggedIn
  }
  getToken() {
    return this.auth.strategy.token.get()
  }
}