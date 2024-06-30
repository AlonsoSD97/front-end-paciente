<template>
    <div class="container" style="height: 100vh; width: 80vw;">
      <h1 class="mb-4">Bienvenido a nuestra aplicación</h1>
      <p class="mb-4">Esta es la página de inicio.</p>
      <b-button variant="primary" to="/paciente">Ir a Datos del Paciente</b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>