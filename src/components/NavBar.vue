<template>
  <b-navbar toggleable="lg" type="Light" variant="Light">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Inicio</router-link></b-nav-item>
        <b-nav-item><router-link to="/paciente">Datos del Paciente</router-link></b-nav-item>
        <b-nav-item><router-link to="/info">Info</router-link></b-nav-item>
        <!-- Agrega más enlaces aquí según sea necesario -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>