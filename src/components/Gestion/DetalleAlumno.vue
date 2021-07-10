<template>
    <div>
        <v-row justify="center">
            <v-col cols="8">

                <v-alert type="info" text >
                    <h3 class="text-h5">
                        Datos del Alumno
                    </h3>

                    <v-divider
                        class="my-4 info"
                        style="opacity: 0.22"
                    ></v-divider>

                    <v-row class="mt-2">
                        <v-col cols="6">Nombre: {{ persona.nombre }}</v-col>
                        <v-col cols="6">Email: {{ persona.email }}</v-col>
                        <v-col cols="6">Teléfono: {{ persona.telefono }}</v-col>
                        <v-col cols="6">Dirección: {{ persona.direccion }}</v-col>
                    </v-row>

                </v-alert>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    
    import { mapState } from 'vuex'
    
    export default {
        computed: {

            ...mapState('gestion', [
                'persona'
            ])
                
        }
    }
</script>

<style>

</style>