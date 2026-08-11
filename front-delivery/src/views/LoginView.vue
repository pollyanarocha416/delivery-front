<template>
<div class="container">
    <h1>Login</h1>
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
  
  <div class="botoes">
        <button @click="login">
            Login
        </button>
    </div>
    <p>{{ mensagem }}</p>
</div>
</template>


<script setup>
import { ref } from 'vue'

const email = ref('')
const senha = ref('')
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

</script>


<style scoped>
.container {
    width: 100%;
    max-width: 450px;
    margin: 60px auto;
    padding: 35px;
    background-color: #1a1a1a;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
}

h1 {
    color: #11e887;
    text-align: center;
    margin-bottom: 30px;
}

label {
    display: block;
    color: white;
    margin-bottom: 7px;
    font-size: 16px;
}

input {
    width: 100%;
    height: 42px;
    padding: 0 12px;
    margin-bottom: 18px;
    border: 1px solid #444;
    border-radius: 8px;
    background-color: #252525;
    color: white;
    font-size: 15px;
    box-sizing: border-box;
    outline: none;
}

input:focus {
    border-color: #11e887;
    box-shadow: 0 0 5px rgba(17, 232, 135, 0.3);
}

.botoes {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 15px;
}

button {
    min-width: 130px;
    height: 42px;
    padding: 0 20px;
    border: none;
    border-radius: 8px;
    background-color: #11e887;
    color: #111;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
}

button:hover {
    background-color: #0dcc75;
    transform: translateY(-2px);
}

button:active {
    transform: translateY(0);
}

.mensagem {
    margin-top: 20px;
    text-align: center;
    color: white;
}
</style>