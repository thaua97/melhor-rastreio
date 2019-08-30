<template lang="pug">
    <span>
        footer
            p Uma frase grande para companhar essa seção
            p.mobile Transportadoras
            div
                img(v-for="image in images" :src="require(`../assets/${image}.svg`)")
                
    </span>
</template>
<script>
export default {
    name: 'Footer',
    data () {
        return {
            images: ['correios', 'viabr', 'jadlog', 'latam']
        }
    }
}
</script>
<style lang="stylus" scoped>
    footer
        width auto
        height 100%
        background #fff
        padding 60px 120px
        
        display flex
        justify-content space-around
        align-items center

        @media screen and (min-width: 320px) and (max-width: 520px)
            display flex
            flex-direction column
            justify-content center
            align-items center

        p
          width 100%
          font-size 1.2rem
          font-weight 900
          display inline-block

          @media screen and (min-width: 320px) and (max-width: 520px)
            display none
        
        p.mobile
            display none 

            @media screen and (min-width: 320px) and (max-width: 520px)
                display inline
                width 100%
                font-size 16px
                text-align center
                margin-bottom 16px

        div
            width 100%
            display flex
            justify-content space-around
            align-items center

            @media screen and (min-width: 320px) and (max-width: 520px)
                display flex
                flex-direction column
                justify-content center
                align-items center

            img 
                height auto
                
               @media screen and (min-width: 320px) and (max-width: 520px)
                    margin-top 10%
                    display grid
                    grid-template-columns auto auto
                    grid-row-gap 40px
                    grid-column-gap 50px
            

</style>