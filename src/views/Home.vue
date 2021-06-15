<template>
	<div>
		<v-app>
			<Navbar></Navbar>
			<Sidebar></Sidebar>

		<v-container fluid>
				<router-view></router-view>
		</v-container>

		</v-app>
	</div>
</template>

<script>
	import Sidebar from '@/components/Home/Sidebar'

	import Navbar from '@/components/Home/Navbar'

	export default {
		name: 'Home',

		components: {
			Sidebar,
			Navbar
		},
	}

</script>
