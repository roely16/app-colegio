<template>
    <div>

        <Filtro></Filtro>

        <v-data-table hide-default-footer :items="items" :headers="headers" @page-count="pageCount = $event" :items-per-page="10" :page.sync="page">
			<template v-slot:[`item.acciones`]="{}">
				
				<Acciones></Acciones>
			
			</template>
        </v-data-table>
		
        <Pagination></Pagination>
    </div>
</template>

<script>

    import Filtro from '@/components/Alumnos/TableFilter.vue'
    import Pagination from '@/components/Alumnos/Pagination.vue'
	import Acciones from '@/components/Alumnos/Acciones'

	import { mapActions, mapMutations } from 'vuex'
	import { mapState } from 'vuex'

    export default {
        components: {
            Filtro,
            Pagination,
			Acciones
        },
        data(){
            return{
                
            }
        },
		methods: {
			...mapActions('alumnos', [
				'obtenerAlumnos',
			]),
			...mapMutations('alumnos', [
				'setPageCount',
				'setPage'
			])
		},
        computed: {
			...mapState('alumnos', {
				items: state => state.items,
				headers: state => state.headers,
			}),
			pageCount: {
				set(val){
					this.setPageCount(val)
				},
				get(){
					return this.$store.state.alumnos.pageCount
				}
			},
			page: {
				get(){
					return this.$store.state.alumnos.page
				},
				set(val){
					this.setPage(val)
				}
			},
		},
		created(){

			this.obtenerAlumnos()

		}
    }
</script>

<style>

</style>