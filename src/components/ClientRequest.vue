<script setup>
import requestTag from "./requestTagc.vue";
</script>

<template>
    <my-nav first-option="Borrowed" first-href="/client-borrowed" second-option="Rerturned" second-href="/client-returned"
        log-out='Log Out'></my-nav>
    <!-- <client-request></client-request> -->
    <requestTag/>
</template>

<script>
export default {
    name: 'ClientRequest'
}
</script>