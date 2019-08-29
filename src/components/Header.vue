<template lang="pug">
    span
        header
            Toolbar
            div.container
                div
                    h1 O serviço de rastreio exclusivo do Melhor Envio
                    P Um serviço de rastreio de encomendas totalmente gratuito
                    a QUERO URILIZAR
                img(:src="require('../assets/map.svg')") 
</template>
<script>
import Toolbar from './Toolbar'

export default {
    name: 'Header',
    components: {
        Toolbar
    }
}
</script>
<style lang="stylus" scoped>
    header
        width 100%
        height 100%
        background #2BC866

        div.container
            height 100%
            padding 90px 0

            display flex
            justify-content space-around
            align-items flex-start
            
            div
                width 500
                margin-left 172px
                display flex
                flex-direction column
                align-items flex-start

                h1
                    text-align left
                    color #fff
                    font-weight 900
                    font-size 36px
                    width 45%

                p
                    text-align left
                    color #fff
                    font-size 18px
                    margin 40px 0
                    width 50%

                a
                    text-align center
                    width 120px
                    height 100%;
                    padding 10px
                    border-radius 8px
                    font-size 14px
                    font-weight 700
                    background #fff
                    color #2BC866

            img
                margin-right 172px;
                    

    
</style>