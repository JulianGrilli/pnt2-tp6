<template>

  <section class="src-components-get-usuarios-table">
    
    <div class="jumbotron">
      <h1 class="display-4">Get</h1>
      <hr>
      <p class="lead">- Tabla de Usuarios Obtenidos de MockApi.io -</p>
    </div>
    <div class="container">
      <div v-if="usuarios.length == 0 && requestCompleted" class="alert alert-warning mt-1">
        <span>No hay usuario registrados.</span>      
      </div>
      <table class="table table-striped " v-if="usuarios.length > 0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Edad</th>
                <th scope="col">Mail</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(usuario, index) in usuarios"
              :key="index">
                <td></td>
                <td>{{usuario.nombre}}</td>
                <td>{{usuario.edad}}</td>
                <td>{{usuario.correo}}</td>
              </tr>
            </tbody>
      </table>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-get-usuarios-table',
    props: [],
    mounted () {
      this.getDatosFormAxios()
    },
    data () {
      return {
        usuarios: [],
        requestCompleted: false,
        url: 'https://5f86225bc8a16a0016e6ab42.mockapi.io/api/v1/usuarios/usuarioform'
      }
    },
    methods: {
      async getDatosFormAxios() {
        let response = await this.axios(this.url)
        try {
          console.log(response.data)
          this.usuarios = response.data
          this.requestCompleted = true;
        } catch (error) {
          console.log("Error obtenido haciendo el GET de los usuario")
        }
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-get-usuarios-table {

  }

  h1 {
    font-size: 30px;
  }

  table {
    border: 1px solid lightblue;
  }
  
  .jumbotron {
    background-color: #d8e7f7;
    box-shadow: 1px 2px #3597ff7d;
  }
</style>
