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
        },
        getTrackId: state => {
            return  state.track.data.tracking.toString()
        },
        getEvents: state => {
            return state.track.data.events.slice().reverse()
        },
        getTrackingStatus: state => {
            return state.track.data.status
        },
    },
    mutations: {
        setTrack(state, track) {
            state.track = track
        }
    }
})
