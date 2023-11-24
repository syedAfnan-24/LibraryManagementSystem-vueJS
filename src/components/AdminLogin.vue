<script setup>
import loginTag from './aBorrow.vue'
</script>
<template>
    <my-nav first-option="Home" first-href="/" second-option="Admin SignUp" second-href="/admin-signup"></my-nav>
    <loginTag/>
</template>
<script>
export default {
    name: 'AdminLogin'
}
</script>