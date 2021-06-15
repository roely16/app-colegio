<template>

  <div>

    <v-navigation-drawer
		color="teal darken-1"
		dark
		:expand-on-hover="$vuetify.breakpoint.mdAndUp && drawer ? true : false"
		:value="drawer"
		:permanent="$vuetify.breakpoint.mdAndUp"
		app	
		@input="(val) => trans(val)"		
	>
		<template v-slot:prepend>
			<v-list-item class="px-2" two-line>
			<v-list-item-avatar>
				<img src="@/assets/img/profile.png">
			</v-list-item-avatar>

			<v-list-item-content>
				<v-list-item-title>{{ userData.persona.primer_nombre }} {{ userData.persona.primer_apellido }}</v-list-item-title>
				<v-list-item-subtitle>{{ userData.rol.nombre }}</v-list-item-subtitle>
			</v-list-item-content>
			</v-list-item>
		</template>

		<v-divider></v-divider>

		<v-list
			nav
			dense
		>
			<v-list-item :to="{name: item.url}" v-for="(item, key) in menu" :key="key" link>
				<v-list-item-icon>
				<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-title>{{ item.nombre }}</v-list-item-title>
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
export default {
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