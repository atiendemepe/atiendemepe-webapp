<template>
    <section v-if="loading" class="hero is-white is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="content">
                <p><img alt="Atiendeme.pe" src="../../assets/logo.png" width="112" height="28"></p>
                <p><progress ref="progress" class="progress is-small is-primary" max="100">15%</progress></p>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: ['loading', 'progress'],
    data() {
        return {}
    },
    watch: {
        progress: () => {
            console.log('progress changed', this)
            //this.$refs['progress'].value=this.progress
        }
    }
}
</script>
<style lang="sass" scoped>
.hero
    position: absolute
    top: 0
    left: 0
    right: 0
    z-index: 100
</style>