<template lang="pug">
    span
        div.container
            div.timeline
                div.progress(v-for="event in events")
                    div.infos
                        img(:src="require(`../assets/${event.status}-complete.svg`)")
                        
                        h4(v-if="event.status === 'coletado'") Coletado
                        h4(v-if="event.status === 'postado'") Postado
                        h4(v-if="event.status === 'encaminhado'") Encaminhado
                        
                        span(v-if="event.status === status") atualmente
                        span(v-else) {{ event.created_at | formatDate }}
                    
                    div.status(v-if="event.status !== status")
                    div.inprogress(v-else)
                
                div.delivered-none
                    img(:src="require('../assets/saiu.svg')")
                    h4 Saiu para entrega
                div.incomming
                div.delivered-none
                    img(:src="require('../assets/entregue.svg')")
                    h4 Entregue
                        
</template>
<script>
export default {
    name: 'TimelineTracking',
    computed: {
        events () {
            const event = this.$store.getters.getEvents;
            return event;
        },
        status () {
            const data = this.$store.getters.getTrackingStatus;
            return data;
        }
    }
}
</script>
<style lang="stylus" scoped>
    div.container
        padding 0px 90pxf
        margin-bottom 90px
        display flex
        justify-content center
        align-items center

    div.timeline
        display flex
        padding 0 40px
        text-align center
        display flex
        align-items center

        .progress
            display flex
            align-items center
            justify-content center
        img
            width 50px
            height 100%
        
        .infos
            margin-top 40px
            position relative
            z-index -1
            display flex
            flex-direction column
            align-items center
            
            h4
                margin-top 10px
                font-size 16px
                font-weight bold 
                color #2BC866
            span
                width 100%
                margin-top 10px
                font-size 12px
        
        .status
            padding 0px 110px
            display flex
            justify-content center
            border-top 3px solid #2BC866
            position relative
        
        .inprogress
            padding 0px 110px
            display flex
            justify-content center
            border-top 3px solid #626262
        
        .incomming
            padding 0px 110px
            display flex
            justify-content center
            border-top 3px solid #D8D8D8
            position relative
            z-index -1
        
        .delivered-none
            margin-top 20px
            
            h4
                color #D8D8D8 

             

        
</style> 