


<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Apresentacao from '@/components/Apresentacao.vue';
</script>

<template>
    <h1>Home</h1>
    <Apresentacao msg="Bem vindo a página inicial" />
    <TheWelcome />
</template>

<style scoped>
    h1 {
        color: #42b983;
    }
    
</style>