<template>
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/paciente">Datos del Paciente</a></li>
        <!-- Agrega más enlaces aquí según sea necesario -->
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    color: #fff;
    padding: 10px;
  }
  
  nav ul {
    list-style-type: none;
  }
  
  nav ul li {
    display: inline;
    margin-right: 10px;
  }
  
  nav ul li a {
    color: #fff;
    text-decoration: none;
  }
  </style>