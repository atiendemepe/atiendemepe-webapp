<template>
    <div>
        <nav-bar />
        <slot />
    </div>
</template>
<script>
import NavBar from '@/views/components/NavBar.vue'
export default {
    components: { NavBar }
}
</script>