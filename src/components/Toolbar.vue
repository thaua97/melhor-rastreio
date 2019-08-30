<template lang="pug">
    span
        nav
            img(:src="require('../assets/Logo.svg')")
            ul
              li 
                a(href="https://www.melhorenvio.com.br/" target="_BLANK") Melhor Envio
              li 
                a(href="https://www.melhorenvio.com.br/login" target="_BLANK") Login
              li
                a.button(href="https://www.melhorenvio.com.br/cadastre-se" target="_BLANK") cadastre-se
              
</template>
<script>

export default {
    name: 'Toolbar',
};
</script>
<style lang="stylus" scoped>
    nav
        height auto
        width auto
        padding 20px 90px
        background transparent

        display flex
        justify-content space-between
        align-items center

        ul
            display flex
           
            @media screen and (min-width: 320px) and (max-width: 520px)
                display none

           li 
               margin 0 20px
               color #fff
               display flex
               align-items center

               a
                color #fff
                cursor pointer
                text-decoration none 
                background transparent

               a.button 
                cursor pointer
                text-decoration none
                color #2BC866
                background #fff
                padding 5px
                border-radius 4px

                display flex
                justify-content center
                align-items center   
</style>