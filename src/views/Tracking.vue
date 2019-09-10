<template lang="pug">
  main-template(v-bind:tracking="infos")
    div
        h1.title Informações do Rastreio
    timeline-tracking
    table-tracking
    
</template>
<script>
import MainTemplate from '../templates/MainTemplate'

import TimelineTracking from '../components/TimelineTracking'
import TableTracking from '../components/TableTracking'

export default {
    name: "Track",
    components: {
        'main-template': MainTemplate,
        'timeline-tracking': TimelineTracking,
        'table-tracking': TableTracking
    },
    created () {
        this.$http.get(`${this.$url}tracking`, {
            params: {
                search: 'PM371835103BR'
            }
        })
        .then(res => {
            if(res.status) {
                this.$store.commit('setTrack', res.data)
            }
        })
        .catch({})
    },
    computed: {
        infos() {
            return this.$store.getters.getTrackId
        }
    }
}
</script>
<style lang="stylus" scoped>
    .title
        font-size 24px
        font-weight bold
</style>