<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<!-- <script>
export default {
  data(){
    return {
      nome: '',
      idade: '',

    }
  }
}
</script> -->

<template>
  <nav>
    <router-link v-if="route.path !== '/'" to="/">
      voltar
    </router-link>
  </nav>
<main>
  <router-view />
</main>
  <!-- {{ nome }} {{ idade }}
  <div v-text="nome"></div>
  <input type="text" v-model="nome" placeholder="nome">
  <input type="text" v-model="idade" placeholder="idade"> -->
</template>

<!-- <style>
/* Testando */
input{
  background-color: aqua;
  text-align: center;
  border-radius: 10px;
}
</style> -->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
