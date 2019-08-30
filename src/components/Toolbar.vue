<template lang="pug">
    span
        nav
            img(:src="require('../assets/Logo.svg')")
            button(v-on:click="loadMenu")
              img(v-if="menu === false" :src="require('../assets/menu.svg')")
              img(v-else :src="require('../assets/close.svg')")
            ul
              li 
                a(href="https://www.melhorenvio.com.br/" target="_BLANK") Melhor Envio
              li 
                a(href="https://www.melhorenvio.com.br/login" target="_BLANK") Login
              li
                a.button(href="https://www.melhorenvio.com.br/cadastre-se" target="_BLANK") cadastre-se
        ul.mobile-nav(v-if="menu")
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
    data () {
      return {
          menu: false
      }
    },
    methods: {
      loadMenu () {
        this.menu = !this.menu
      }
    }
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

        @media screen and (min-width: 320px) and (max-width: 520px)
          padding 20px

        button
            display none
            
            @media screen and (min-width: 320px) and (max-width: 520px)
              display flex
              border none
              background transparent
              cursor pointer
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
                
                

        
    ul.mobile-nav
        display none
           
        @media screen and (min-width: 320px) and (max-width: 520px)
            width 100%
            position absolute
            display flex
            flex-direction column
            align-items flex-star
            background rgba(0,0,0,0.6)
            box-shadow 0 8px 8px 0 rgba(0,0,0,0.3)
            z-index 2

        li 
           margin 0 20px
           color #fff
           display flex
           align-items center
           padding 20px
           
           a
              color #fff
              cursor pointer
              text-decoration none 
              background transparent
              
              @media screen and (min-width: 320px) and (max-width: 520px)
                font-size 18px


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

                @media screen and (min-width: 320px) and (max-width: 520px)
                  font-size 18px
                  color #2BC866
                  padding 0
                  border none
                  background transparent

                  display flex
                  justify-content center
                  align-items center
</style>