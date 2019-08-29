import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    track: []
  },
  getters: {
    getTrack: state => {
        return state.track.data
    }
  },
  mutations: {
    setTrack(state, track) {
        state.track = track
    }
  }
})
