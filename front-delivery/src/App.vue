<template>
  <nav>
    <router-link v-if="route.path !== '/'" to="/">
      voltar
    </router-link>
  </nav>
<main>
  <router-view />
</main>

<!-- Estudando: -->
  <!-- v-show só pra esconder da tela, no inspecionar aparece -->
  <!-- <div v-if="status" v-text="nome"></div>
  <div v-else>aaaaaaa</div>
  <div v-if="data.id == 1">
    Id: {{ data.id }}<br>
    Nome: {{ data.nome }}
  </div>
  <h1 v-else>Nada</h1>
  <input type="text" v-model="nome" placeholder="nome">
  <input type="text" v-model="idade" placeholder="idade"> -->


</template>

<!-- estudando: -->
<!-- <script>
export default {
  data(){
    return {
      status: false,
      nome: '',
      idade: '',
      data: {
        id: 1,
        nome: "Polly"
      }

    }
  }
}
</script> -->
<!--  -->


<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
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
