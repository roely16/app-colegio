import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Alumnos from '../views/Alumnos.vue'
import Permisos from '../views/Permisos'

Vue.use(VueRouter)

const routes = [
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
			}
		]  
	}
]

const router = new VueRouter({
  routes
})

export default router
