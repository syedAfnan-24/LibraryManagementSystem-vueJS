<script setup>
    import sigupTag from './signupTag.vue'
</script>
<template>
    <my-nav first-option="Home" first-href="/" second-option="Admin Login" second-href="/admin-login"></my-nav>
    <sigupTag/>
</template>

<script>
export default {
    name: 'AdminSignup'
}
</script>