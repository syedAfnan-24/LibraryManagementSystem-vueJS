<script setup>
import homeTag from './homeTag.vue'
</script>
<template>
    <my-nav first-option="Requested" first-href="/admin-request" second-option="Returned" second-href="/admin-return"
        log-out='Log Out'></my-nav>
        <homeTag/>
</template>

<script>
export default {
    name: 'AdminHome'
}
</script>