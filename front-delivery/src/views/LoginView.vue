<template>
    <h1>Login</h1>
    <form>
      <label for="username">Username:</label><br>
      <input type="text" id="username" name="username"><br>
      <label for="pwd">Password:</label><br>
      <input type="password" id="pwd" name="pwd">
    </form>
  
</template>

<script setup>
// código opcional
</script>

<style scoped>
h1 {
  color: #11e887;
}
label {
  color: white;
}
input {
  width: 300px;
  height: 35px;
  margin-bottom: 10px;
}
</style>