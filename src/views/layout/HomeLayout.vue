<template>
    <div>
        <nav-bar />
        <slot />
        <foot-bar />
    </div>
</template>
<script>
import NavBar from '@/views/components/NavBar.vue'
import FootBar from '@/views/components/FootBar.vue'

export default {
    components: { NavBar, FootBar }
}
</script>