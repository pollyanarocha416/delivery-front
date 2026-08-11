<!-- <template>
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

</script> -->
<script setup>
import { ref } from 'vue'

const email = ref('')
const senha = ref('')

const id_usuario = ref('')
const mensagem = ref('')


async function login() {
    const dados = {
        email: email.value,
        senha: senha.value
    }

    console.log('Enviando:', dados)

    try {
        const resposta = await fetch(
            'http://localhost:8000/auth/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            }
        )

        const resultado = await resposta.json()

        console.log('Status:', resposta.status)
        console.log('Resposta:', resultado)

        if (!resposta.ok) {
            mensagem.value = resultado.detail || 'Erro ao fazer login'
            return
        }

        localStorage.setItem(
            'access_token',
            resultado.access_token
        )

        mensagem.value = 'Login realizado com sucesso!'

    } catch (erro) {
        console.log('Erro ao conectar com a API:', erro)
        mensagem.value = 'Erro ao conectar com o servidor'
    }
}

async function cadastrar() {
    const token = localStorage.getItem('access_token')

    if (!token) {
        mensagem.value = 'Faça login primeiro'
        return
    }

    const dados = {
        id_usuario: Number(id_usuario.value)
    }

    console.log('Enviando pedido:', dados)

    try {
        const resposta = await fetch(
            'http://localhost:8000/orders/order',
            {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },

                body: JSON.stringify(dados)
            }
        )

        const resultado = await resposta.json()

        console.log('Status:', resposta.status)
        console.log('Resposta:', resultado)

        if (!resposta.ok) {
            mensagem.value =
                resultado.detail || 'Erro ao criar pedido'

            return
        }

        mensagem.value =
            'Pedido criado com sucesso!'

    } catch (erro) {
        console.log('Erro ao criar pedido:', erro)

        mensagem.value =
            'Erro ao conectar com a API'
    }
}
</script>

<template>
  <h1>Cadastro de pedidos</h1>
    <form>
        <input v-model="id_usuario" type="number" placeholder="ID do usuário" required /><br>
        <button @click="cadastrar">
          Cadastrar
        </button>
    </form>
  
  <input
      v-model="email"
      type="text"
      placeholder="Username"
  >

  <input
      v-model="senha"
      type="password"
      placeholder="Password"
  >

  <button @click="login">
      Entrar
  </button>
   <p>{{ mensagem }}</p>
</template>


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