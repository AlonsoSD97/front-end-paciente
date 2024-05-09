import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import PacienteData from './components/PacienteData.vue'
import Info from './components/Info.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/paciente', component: PacienteData },
  { path: '/info', component: Info },
  // Agrega más rutas aquí según sea necesario
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router