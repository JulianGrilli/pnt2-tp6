<template>

  <section class="src-components-navbar">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to='/'>
      <a class="navbar-brand" href="#">Inicio</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to='/getUsuariosTable'>
            <a class="nav-link" href="#">Obtener Usuarios</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to='/crearUsuarioForm'>
            <a class="nav-link" href="#">Crear Ususarios</a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-navbar {

  }
  nav {
    box-shadow: 1px 2px #c0c0c17d;
  }
</style>
