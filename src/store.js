import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true, //u must modify state using mutations
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  mutations: {
    setToken (state, token){
      state.token = token
      if(state.token){
        state.isUserLoggedIn = true
      }else{
        state.isUserLoggedIn = false
      }
    },
    setUser(state, user){
      state.user = user
    }
  },
  actions: {
    setToken({commit}, token){
      commit('setToken', token)
    },
    setUser({commit}, user){
      commit('setUser', user)
    }
  }
})
