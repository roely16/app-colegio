<template>
	<div>
		<v-speed-dial
			v-model="fab"
			:direction="direction"
			:open-on-hover="hover"
			:transition="transition"
		>
			<template v-slot:activator>
				<v-btn color="grey lighten-4" fab x-small>
					<v-icon v-if="fab">
						mdi-close
					</v-icon>
					<v-icon v-else>
						mdi-dots-vertical
					</v-icon>
				</v-btn>
			</template>
			<v-btn
				fab
				dark
				x-small
				color="red"
				@click="mostrarEliminar()"
			>
				<v-icon>mdi-delete</v-icon>
			</v-btn>
			<v-btn
				fab
				dark
				x-small
				color="info"
				@click="mostrarProceso()"
			>
				<v-icon>mdi-account-arrow-right</v-icon>
			</v-btn>
			<v-btn
				fab
				dark
				x-small
				color="green"
				@click="mostrarEditar()"
			>
				<v-icon>mdi-pencil</v-icon>
			</v-btn>
		</v-speed-dial>

	</div>
</template>

<script>

	import { mapActions, mapMutations } from 'vuex'

	export default {
		props: {
			item: Object
		},
		data: () => ({
			direction: 'left',
			fab: false,
			fling: false,
			hover: false,
			tabs: null,
			top: false,
			right: false,
			bottom: false,
			left: false,
			transition: 'slide-y-reverse-transition',
		}),
		methods: {

			...mapActions('alumnos', [
				'eliminarAlumno',
				'detalleAlumno',
				'estadosAlumno'
			]),
			...mapMutations('modal', [
				'setShow',
				'setTitle',
				'setWidth',
				'setContent',
			]),
			...mapMutations('alumnos', [
				'setAlumno'
			]),
			mostrarEliminar(){

				this.eliminarAlumno(this.item)

			},
			mostrarEditar(){

				this.detalleAlumno(this.item)

				this.setTitle('Editar alumno')
				this.setWidth(800)
				this.setContent('FormRegistro')
				this.setShow(true)

			},
			mostrarProceso(){

				this.setAlumno(this.item)
				this.estadosAlumno(this.item)

				this.setTitle('Proceso de Inscripción')
				this.setWidth(500)
				this.setContent('FormProceso')
				this.setShow(true)

			}

		}
	}
</script>

<style>

</style>