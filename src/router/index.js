import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Alumnos from '../views/Alumnos.vue'
import Permisos from '../views/Permisos'
import Inscripcion from '../views/Inscripcion.vue'
import DetalleGestion from '../views/DetalleGestion'

// Perfil del encargado
import AlumnosEncargado from '../views/AlumnosEncargado'

Vue.use(VueRouter)

const routes = [
	{
		path: '/inscripcion',
		name: 'inscripcion',
		component: Inscripcion  
	},
	{
		path: '/detalle_gestion',
		name: 'detalle_gestion',
		component: DetalleGestion  
	},
	{
		path: '/',
		name: 'login',
		component: Login  
	},
	{
		path: '/home',
		name: 'home',
		component: Home,
		children: [
			{
				path: '/home/alumnos',
				name: 'alumnos',
				component: Alumnos,
			},
			{
				path: '/home/permisos',
				name: 'permisos',
				component: Permisos,
			},
			// Perfil del encargado
			{
				path: '/home/alumnos_encargado',
				name: 'alumnos_encargado',
				component: AlumnosEncargado,
			}
		]  
	}
]

const router = new VueRouter({
  routes
})

export default router
