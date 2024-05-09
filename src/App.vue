<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import PacienteData from './components/PacienteData.vue'
import Navbar from './components/NavBar.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> --> 
  
  <div class="container">
    <Navbar />
    <h1 class="page-title">Datos del Paciente</h1>
    <PacienteData />
  </div>
</template>

<script>
import Web3 from 'web3';
let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  try {
    // Solicita acceso a la cuenta si es necesario
    window.ethereum.enable();
  } catch (error) {
    // El usuario denegó el acceso a la cuenta
  }
} else if (window.web3) {
  // Para versiones antiguas de dapp browsers
  web3 = new Web3(window.web3.currentProvider);
} else {
  console.log('No Ethereum browser detected. You should consider trying MetaMask!');
}

web3.eth.getAccounts().then(console.log);
</script>

<style scoped>
body {
  background-color: #f8f8f8;
  font-family: Arial, sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.section-content {
  font-size: 16px;
  line-height: 1.5;
}

.button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #42b883;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #3a9d77;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
