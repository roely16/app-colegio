<template>

  <div>

    <v-navigation-drawer
		:expand-on-hover="$vuetify.breakpoint.mdAndUp && drawer ? true : false"
		:value="drawer"
		:permanent="$vuetify.breakpoint.mdAndUp"
		app	
		@input="(val) => trans(val)"	
		class="elevation-4"	
	>
		<template v-slot:prepend>
			<Profile></Profile>
		</template>
		
		<v-divider></v-divider>

		<v-list
			nav
			dense
		>
			<v-list-item color="primary" :to="{name: item.url}" v-for="(item, key) in menu" :key="key" link>
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-title class="ml-4">{{ item.nombre }}</v-list-item-title>
			</v-list-item>
	
		</v-list>

		<template v-slot:append>
			<v-list-item  link>
				<v-list-item-icon>
				<v-icon>mdi-logout</v-icon>
				</v-list-item-icon>
				<v-list-item-title>Salir</v-list-item-title>
			</v-list-item>
		</template>
	</v-navigation-drawer>

  </div>
  
</template>

<script>

	import Profile from '@/components/Home/Profile.vue'

	export default {
		components: {
			Profile
		},
		data(){
			return{
			}
		},
		methods: {
			trans(value){

				if (!value) {
					
					this.$store.commit('setDrawer', value)

				}
			}
		},
		computed: {
			menu(){
				return this.$store.getters.getMenu
			},
			userData(){
				
				const data = JSON.parse(localStorage.getItem('app-colegio'))

				return data

			},
			drawer: function(){
				return this.$store.getters.getDrawer
			}
		},
		created(){
			
			this.$store.dispatch('getMenu')

		}
	}
</script>

<style>

</style>