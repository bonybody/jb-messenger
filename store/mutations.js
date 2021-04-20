import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  SET_AUTH_USER: (state, {authUser}) => {
    state.authUser = {
      uid: authUser.id,
      display_name: authUser.data().display_name,
      pictureUrl: authUser.data().pictureUrl
    }
  },
}