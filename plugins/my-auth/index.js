export default function ({$fire, redirect, store, $liff, $router}, inject) {
  const myAuth = new MyAuth($fire, redirect, store, $liff, $router)
  inject('myAuth', myAuth)
}

class MyAuth {
  constructor(fire, redirect, store, liff, router) {
    this.fire = fire
    this.store = store
    this.redirect = redirect
    this.liff = liff
    this.router = router
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

  loginByLine() {
    return this.liff.login({
      redirectUri: process.env.clientUrl + '/home'
    });
  }

  logout() {
    this.liff.logout()
    this.fire.auth.signOut()
    this.redirect('/')
  }

  getUser() {
    return this.store.getters.getAuthUser;
  }


  loggedIn() {
    return Boolean(this.liff.isLoggedIn())
  }
  getToken() {
    return this.auth.strategy.token.get()
  }
}