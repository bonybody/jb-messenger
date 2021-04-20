export default {
  isLoggedIn: (state) => {
    try {
      return state.authUser.uid !== null
    } catch {
      return false
    }
  },
  getAuthUser: (state) => {
    return state.authUser
  }
}