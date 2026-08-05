<!-- <script setup>
import Test from './components/Test.vue';
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    
      <Test msg="Bem vindo a pagina inicial de login e cadastro" />
      <template>
        <nav>
          <router-link to="/segunda">Segunda</router-link>
        </nav>

        <router-view />
      </template>
  </header>

  <router-view />

  <main>
    <TheWelcome />
  </main>

</template> -->
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/segunda">Segunda</router-link>
  </nav>

  <router-view />
</template>
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
