<script setup>
import requestAdmin from './requestPagea.vue'
</script>
<template>
    <my-nav first-option="Dashboard" first-href="/controlls" second-option="Borrowed" second-href="/admin-borrow"
        log-out='Log Out'></my-nav>
    <!-- <admin-request></admin-request> -->
    <requestAdmin/>
</template>

<script>
export default {
    name: 'AdminRequest'
}
</script>