<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>
<!-- Components = blocos reutilizáveis 
(Navbar.vue, Footer.vue, CardProduto.vue, FormularioLogin.vue...) -->
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Fazer
      <a href="http://localhost:5173/login" target="_blank" rel="noopener">Login</a> ou
      <a href="http://localhost:5173/cadastro" target="_blank" rel="noopener">Cadastro</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
