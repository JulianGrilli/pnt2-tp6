<template>

  <section class="src-components-crear-usuario-form">
    <div class="jumbotron">
      <h1 class="display-4">POST</h1>
      <hr>
      <p class="lead">- Formulario para dar de alta un nuevo usuario -</p>
    </div>
    <div class="container">
      <div class="col-md-12">
        <form  nonvalidate autocomplete="off" @submit.prevent="enviar()">
          <!-- Campo Nombre -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              class="input-valor form-control" 
              v-model="$v.f.nombre.$model"
              placeholder="Ingrese un nombre"
            >
          </div>
          <!-- Validacion campo Nombre -->
          <div v-if="$v.f.nombre.$error && $v.f.nombre.$dirty" class="alert alert-danger mt-1">
            <div v-if="$v.f.nombre.required.$invalid">Este campo es requerido</div>
            <div v-else-if="$v.f.nombre.minLength.$invalid">Este campo debe tener al menos 5 caracteres</div>
            <div v-else-if="$v.f.nombre.maxLength.$invalid">Este campo debe tener como maximo 15 caracteres</div>
          </div>

          <!-- Campo Edad -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="nombre">Edad</label>
            <input 
              type="number" 
              class="input-valor form-control" 
              id="nombre" 
              v-model="$v.f.edad.$model"
              placeholder="Ingrese una edad"
            >
          </div>
          <!-- Validacion campo Edad -->
          <div v-if="$v.f.edad.$error && $v.f.edad.$dirty" class="alert alert-danger mt-1">
              <div v-if="$v.f.edad.required.$invalid">Este campo es requerido</div>
              <div v-else-if="$v.f.edad.between.$invalid">La edad debe estar entre los 18 y los 120 años</div>
          </div>
          <!-- Campo Mail -->
          <div class="form-group">
            <label class="label-form font-weight-bold" for="correo">Mail</label>
            <input 
              type="mail" 
              class="input-valor form-control" 
              id="correo" 
              v-model="$v.f.correo.$model"
              placeholder="Ingrese un mail"
            >
          </div>
          <!-- Validacion campo Mail -->
          <div v-if="$v.f.correo.$error && $v.f.correo.$dirty" class="alert alert-danger mt-1">
              <div v-if="$v.f.correo.required.$invalid">Este campo es requerido</div>
              <div v-else-if="$v.f.correo.email.$invalid">Debe ser un mail valido</div>
          </div>
          <button 
            type="submit" 
            class="btn btn-success"
            :disabled="false"
          >
            Crear Usuario
          </button> 
        </form>
      </div>
    </div>
  </section>

</template>


<script>

  import {required, email, minLength, between, maxLength} from '@vuelidate/validators' 
  export default  {
    name: 'src-components-crear-usuario-form',
    props: [],
  data () {
    return {
      f: this.resetForm(),
      url: 'https://5f86225bc8a16a0016e6ab42.mockapi.io/api/v1/usuarios/usuarioform'
    }
  },
  computed: {

  },
  mounted () {

  },
  validations: {
    f: {
        nombre: { 
          required,
          minLength: minLength(5),
          maxLength: maxLength(15)
        },
        edad: { 
          required,
          between: between(18,120)
        },
        correo: {
          required,
          email
        }
      }
  },
  methods: {
    sendsFormData(datos){
      console.log(datos)
    },
    enviar(){
      
      let form = {
          nombre: this.$v.f.nombre.$model,
          edad: this.$v.f.edad.$model,
          correo: this.$v.f.correo.$model
      }
      console.log(form)
      this.sendDatosFormAxios(form)
      this.f = this.resetForm()
      this.$v.$reset()
    },
    resetForm(){
      return {
        nombre: '',
        edad: '',
        correo: ''
      }
    },
    sendDatosFormAxios(datos) {
      this.axios.post(this.url, datos, {'content-type': 'application/json'})
      .then(res => console.log(res.data))
      .catch(error => console.log('HTTP POST ERROR', error))
    }
}
}



</script>

<style scoped lang="css">
  .src-components-crear-usuario-form {

  }
  .label-form {
    float: left;
    margin-left: 3px;
    margin-top: 35px;
}

h1 {
    font-size: 30px;
}

button {
    position: absolute;
    right: 17px;
    margin-bottom: 20px;
    margin-top: 10px;
    box-shadow: 4px 4px #87f137b5;
}

.jumbotron {
    background-color: #d8e7f7;
    box-shadow: 1px 2px #3597ff7d;
}

.input-valor {
    box-shadow: 4px 4px #d8e7f77d;
}
</style>
