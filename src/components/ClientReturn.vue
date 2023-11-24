<script setup>
import returnTag from "./returnTagc.vue";
</script>
<template>
    <my-nav first-option="Dashboard" first-href="/home" second-option="Borrowed" second-href="/client-borrowed"
        log-out='Log Out'></my-nav>
    <!-- <client-return></client-return> -->
    <returnTag/>
</template>

<script>
export default {
    name: 'ClientReturn'
}
</script>