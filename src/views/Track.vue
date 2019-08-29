<template lang="pug">
  main-template
    div
        h1 Informações do Rastreio - {{ `${track.tracking}` }}
         
    table
        tr
           th Situação
           th Movimentação
        tr(v-for="item in track.events" :key="item.created_at")
            td 
                P {{ 'Objeto ' + item.status }}
            td(v-if="item.status === 'postado'") {{ 'em ' + item.location }}
            td(v-else-if="item.status === 'encaminhado'") {{ 'para ' + item.location }}
            td(v-else-if="item.status === 'coletado'") {{ 'para ' + item.location }}

</template>
<script>
import MainTemplate from '../templates/MainTemplate'

export default {
  name: "Track",
  components: {
    'main-template': MainTemplate
  },
  created () {
      this.$http.get(this.$url + `tracking?search=PM371835103BR`)
      .then(res => {
          if(res.status) {
            this.$store.commit('setTrack', res.data)
          }
      })
      .catch(e => {
        console.log(e+ 'error')
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
        border-collapse collapse
        width 100%
        box-shadow 0 8px 4px 0 rgba(0,0,0,0.2)

        tr

            &:nth-child(even) 
                background-color #f2f2f2
        td
            padding 20px

</style>