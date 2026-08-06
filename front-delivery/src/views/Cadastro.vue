<template>
    <h1>Cadastro</h1>
    <form>
        <label for="username">Email:
        </label><br>
        <input type="email" id="email" pattern=".+@example\.com" size="30" required /><br>
        
        <label for="username" required >Username:</label><br>
        <input type="text" id="username" name="username"><br>
        <label for="pwd" required>Password:</label><br>
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