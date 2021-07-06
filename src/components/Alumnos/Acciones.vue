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
			>
				<v-icon>mdi-delete</v-icon>
			</v-btn>
			<v-btn
				fab
				dark
				x-small
				color="green"
			>
				<v-icon>mdi-pencil</v-icon>
			</v-btn>
		</v-speed-dial>
	</div>
</template>

<script>
export default {
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
    })
}
</script>

<style>

</style>