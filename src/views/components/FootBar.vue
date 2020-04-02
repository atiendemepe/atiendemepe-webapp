<template>
    <nav class="navbar is-white is-fixed-bottom has-shadow is-hidden-desktop" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link :to="{ name: 'home' }" class="navbar-item is-expanded is-block has-text-centered active">
                <span class="icon">
                    <feather type="home"></feather>
                </span>
                <p>Inicio</p>
            </router-link>
            <router-link :to="{ name: 'restaurant', params: { id: 123 } }" class="navbar-item is-expanded is-block has-text-centered">
                <span class="icon">
                    <feather type="camera"></feather>
                </span>
                <p>Iniciar</p>
            </router-link>
            <router-link to="profile" class="navbar-item is-expanded is-block has-text-centered">
                <span class="icon">
                    <feather type="user"></feather>
                </span>
                <p>Perfil</p>
            </router-link>
        </div>
    </nav>
</template>
<script>
export default {
}
</script>
<style lang="sass" scoped>
</style>