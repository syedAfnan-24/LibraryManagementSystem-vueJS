<script setup>
import borrowTag from "./borrowTaga.vue";
</script>

<template>
    <my-nav first-option="Dashboard" first-href="/controlls" second-option="Returned" second-href="/admin-return"
        log-out='Log Out'></my-nav>
    <!-- <admin-borrow></admin-borrow> -->
    <borrowTag/>
</template>

<script>
export default {
    name: 'AdminBorrow'
}
</script>