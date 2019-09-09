<template lang="pug">
    span 
        main-header
        main-footer
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
    name: "Home",
    components: {
        "main-header": Header,
        "main-footer": Footer
    },
    created () {
        this.$http.get(`${this.$url}tracking`, {
            params: {
                search: 'PM371835103BR'
            }
        })
        .then(res => {
            if(res.status) {
                this.$store.commit('setTrack', res.data)
            }
        })
        .catch({})
    },
};
</script>