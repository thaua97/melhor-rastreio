<template lang="pug">
    span
        nav
            router-link(to="/")
                img(:src="require('../assets/LogoC.svg')")
            p
                span Correios 
                strong {{ tracking || 'Nenhum código'}}
        div
            slot
        footer
            div
                a melhor rastreio
                a Página Incial
                a suporte
            div
                p.love Feito com
                    img(:src="require('../assets/love.svg')") 
                    | por

                img(:src="require('../assets/Logo.svg')")
            div
                p Melhor Rastreio 2019  
                p Todos os direitos reservados
                a(href="https://www.melhorenvio.com.br/termos" target="_BLANK") termos de uso

</template>
<script>
export default {
    name: 'MainTemplate',
    props: {
        tracking: String
    },
}
</script>
<style lang="stylus" scoped>
    nav
        height auto
        width auto
        padding 20px 120px
        background transparent
        box-shadow 0 0 5px 5px rgba(0,0,0,0.1)

        display flex
        justify-content space-between
        align-items center
        
        p
            text-align  right

            span
                font-weight 400
                font-size 18px
            strong
                font-weight 900
                font-size 24px 
                display block
    div
        padding 40px 150px
        margin-bottom 20px
       
    footer
        bottom 0
        width 100%
        background #2BC866
        color #fff

        display flex
        justify-content space-around
        align-items center

        div
            display flex
            flex-direction column
            color #fff

            p
                margin-bottom 10px
                color #fff
                
                img 
                    margin 0px 10px 
            
            p.love
                display flex
                align-self center

            a
                margin-bottom 5%
                color #fff
                cursor pointer
                text-decoration none 
                background transparent      
</style>
