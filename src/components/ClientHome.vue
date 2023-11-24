<script setup>
import GggJ from './ggg.vue'
</script>

<template>
    <my-nav first-option="Requested" first-href="/client-request" second-option="Rerturned" second-href="/client-returned" log-out='Log Out'></my-nav>   
    <GggJ/>
</template>

<script>
export default{
    name:'ClientDashboard'
}
</script>