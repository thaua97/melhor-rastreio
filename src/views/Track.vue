<template lang="pug">
  main-template
    div
        h1 Informações do Rastreio
    timeline-tracking
    table
        tr
           th 
                p Situação
           th Movimentação
        tr(v-for="item in track.events" :key="item.created_at")
            td 
                div 
                    img(v-if="item.status === 'encaminhado'" :src="require(`../assets/${item.status}.svg`)")
                    img(v-if="item.status === 'postado'" :src="require(`../assets/${item.status}.svg`)")
                    img(v-if="item.status === 'coletado'" :src="require(`../assets/${item.status}.svg`)") 
                    
                    p(v-if="item.status === 'encaminhado'") {{ 'Objeto ' + item.status }}
                        span {{ item.created_at | formatDate }}
                    p(v-else-if="item.status === 'postado'") {{ 'Objeto ' + item.status }}
                        span {{ item.created_at | formatDate }}
                    p(v-else-if="item.status === 'coletado'") Coleta realizada
                        span {{ item.created_at | formatDate }}

            td(v-if="item.status === 'postado'") {{ 'em  ' + item.location }}
            td(v-else-if="item.status === 'encaminhado'") {{ 'para  ' + item.location }}
            td(v-else-if="item.status === 'coletado'") {{ 'por  ' + item.location }}

</template>
<script>
import MainTemplate from '../templates/MainTemplate'

import TimelineTracking from '../components/TimelineTracking'

export default {
    name: "Track",
    components: {
        'main-template': MainTemplate,
        'timeline-tracking': TimelineTracking
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
        .catch((err) => {
                console.log(err+ 'error')
        })
    },
    computed: {
        track () {
            return this.$store.getters.getTrack
        }
  }
};
</script>
<style lang="stylus" scoped>
    div 
        h1
           font-size 24px
           font-weight bold
    table
        margin-bottom 40px
        border-collapse collapse
        width 100%
        height 100%
        box-shadow 0 8px 4px 0 rgba(0,0,0,0.2)

        tr
            &:nth-child(even) 
                background-color #f2f2f2
        th
            text-align left
            padding 15px
            font-size 18px
            font-weight 700
            
            p   
                margin-left 20%
                font-size 18px
                font-weight 700
            
        td  
            div 
                display flex
                justify-content flex-start
                align-items center
            p 
                margin-left 20px
            span
                display block
                margin-top 5px

</style>