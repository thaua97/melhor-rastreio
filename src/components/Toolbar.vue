<template lang="pug">
    span
        nav
            img(:src="require('../assets/Logo.svg')")
            ul
              li Melhor Envio
              li Login
              li
                a cadastre-se
              
</template>
<script>

export default {
    name: 'Toolbar',
}
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
           li 
               margin 0 20px
               color #fff
               a 
                 color #2BC866
                 background #fff
                 padding 5px
                 border-radius 4px

                 display flex
                 justify-content center
                 align-items center
                

        
</style>