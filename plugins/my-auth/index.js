export default function ({$fire, redirect}, inject) {
  const myAuth = new MyAuth($fire, redirect)
  inject('myAuth', myAuth)
}

class MyAuth {
  constructor(fire, redirect) {
    this.fire = fire
    this.redirect = redirect
  }

  async signUpByEmailWithName(email, password, name) {
    return await this.fire.auth.createUserWithEmailAndPassword(
      email, password
    ).then(({ user }) => {
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
    return this.auth.loggedIn
  }
  async logout() {
    return await this.auth.logout()
  }

  getToken() {
    return this.auth.strategy.token.get()
  }
}