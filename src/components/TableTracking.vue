<template lang="pug">
    span
        table
            tr
            th 
                p Status
            th Movimentação
            tr.infos(v-for="item in track.events" :key="item.created_at")
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
export default {
    computed: {
        track () {
            return this.$store.getters.getTrack
        }
    }
}
</script>

<style lang="stylus" scoped>
    table
        margin-bottom 4%
        border-collapse collapse
        width 100%
        height 100%
        box-shadow 0 4px 8px 0 rgba(0,0,0,0.2)
        background-color #f2f2f2

        .infos
            &:nth-child(even) 
                background-color #fff
        th
            text-align left
            padding 1.5%
            font-size 1.4rem
            font-weight 700
            background-color #fff

            @media screen and (max-width: 530px)
                font-size: 0.8rem
            
            p   
                margin-left 20%
                font-size 1.4rem
                font-weight 700

                @media screen and (max-width: 530px)
                    font-size: 0.8rem
            
        td
            padding 3%  
            
            div 
                display flex
                justify-content flex-start
                align-items center
            p 
                margin-left 10%
            span
                display block
                margin-top 10%
</style>