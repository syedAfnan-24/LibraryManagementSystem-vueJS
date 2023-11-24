<script setup>
import returnTag from "./returnTaga.vue";
</script>
<template>
    <my-nav first-option="Dashboard" first-href="/controlls" second-option="Borrowed" second-href="/admin-borrow"
        log-out='Log Out'></my-nav>
    <!-- <admin-return></admin-return> -->
    <returnTag/>
</template>

<script>
export default {
    name: 'AdminReturn'
}
</script>