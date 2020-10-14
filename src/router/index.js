import { createWebHistory, createRouter } from 'vue-router'
import CrearUsuarioForm from '../components/CrearUsuarioForm.vue'
import GetUsuariosTable from '../components/GetUsuariosTable.vue'

const routes = [
    { path: '/', name: 'Home', component: GetUsuariosTable },
    { path: '/getUsuariosTable', name: 'GetUsuariosTable', component: GetUsuariosTable },
    { path: '/crearUsuarioForm', name: 'CrearUsuarioForm', component: CrearUsuarioForm }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router


