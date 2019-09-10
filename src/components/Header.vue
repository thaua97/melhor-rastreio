<template lang="pug">
    span
        header
            toolbar
            div.container
                div
                    h1 O serviço de rastreio exclusivo do Melhor Envio
                    P Um serviço de rastreio de encomendas totalmente gratuito
                    router-link(to="/rastreio") QUERO URILIZAR
                    router-link.mob(to="/rastreio") DÊ O PRIMEIRO PASSO
                img(:src="require('../assets/map.svg')") 
                img.mobile(:src="require('../assets/map-m.svg')")
</template>
<script>
import Toolbar from './Toolbar'

export default {
    name: 'Header',
    components: {
        'toolbar': Toolbar
    }
}
</script>
<style lang="stylus" scoped>
    header
        width 100%
        height 100%
        background #2BC866

        @media screen and (max-width: 530px)
            background-image url('../assets/bg.png')
            background-origin center
            background-size 100%
        
        div.container
            height 100%
            padding 90px 0

            display flex
            justify-content space-around
            align-items flex-start

            @media screen and (min-width: 320px) and (max-width: 520px)
                display flex
                flex-direction column
                justify-content center
                align-items center

            div
                width 500
                margin-left 172px
                display flex
                flex-direction column
                align-items flex-start

                @media screen and (min-width: 320px) and (max-width: 520px)
                    width 100%
                    margin-left 0
                    align-items center          

                h1
                    text-align left
                    color #fff
                    position relative
                    font-weight 900
                    font-size 36px
                    width 60%
                
                    &:after
                        content " "
                        position absolute
                        width 25%
                        bottom -30px
                        left 0
                        right: 0
                        height 0.5em
                        border-top 4px solid #fff
                        z-index 1
                    
                    @media screen and (min-width: 320px) and (max-width: 520px)
                        width 100%
                        text-align center
                        font-size 24px

                        &:after
                            content " "
                            border-top none
                    
                p
                    width 50%
                    text-align left
                    color #fff
                    font-size 18px
                    margin 40px 0

                    @media screen and (min-width: 320px) and (max-width: 520px)
                        width 100%
                        text-align center
                    
                a
                    text-decoration none 
                    text-align center
                    width 120px
                    height 100%;
                    padding 10px
                    border-radius 8px
                    box-shadow 0 4px 8px 0 rgba(0,0,0,0.2)
                    font-size 14px
                    font-weight 700
                    background #fff
                    color #2BC866
                    transition box-shadow 0.2s
                    
                    &:hover
                        box-shadow 0 4px 8px 0 rgba(0,0,0,0.4)
                    
                    @media screen and (min-width: 320px) and (max-width: 520px)
                        display none

                a.mob
                    display none
                    
                    @media screen and (min-width: 320px) and (max-width: 520px)
                        width 100%
                        height 100%
                        max-width 200px
                        padding 10px
                        margin-bottom 15%
                        display block
                        border-radius 8px
                        box-shadow 0 4px 8px 0 rgba(0,0,0,0.2)
                        text-decoration none 
                        text-align center
                        font-size 1.4rem
                        font-weight 700
                        color #2BC866
                        background #fff
                        transition box-shadow 0.2s
                        
                        &:hover
                            box-shadow 0 4px 8px 0 rgba(0,0,0,0.4)
            img
                margin-right 172px;
                
                @media screen and (min-width: 320px) and (max-width: 520px)
                    display none
            img.mobile
                display none 
                
                @media screen and (min-width: 320px) and (max-width: 520px)
                    display inline
                    margin-right 0
                    align-self center  
</style>