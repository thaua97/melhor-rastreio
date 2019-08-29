<template lang="pug">
    <span>
        footer
            p Uma frase grande para companhar essa seção
            div
                img(:src="require('../assets/correios.svg')")
                img(:src="require('../assets/jadlog.svg')")
                img(:src="require('../assets/viabr.svg')")
    </span>
</template>
<script>
export default {
    name: 'Footer'
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

        p
          width 100%
          font-size 1.2rem
          font-weight 900

        div
            width 100%
            display flex
            justify-content space-around
            

</style>