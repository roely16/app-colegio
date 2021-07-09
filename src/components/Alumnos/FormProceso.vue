<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="6">
                    <v-row>
                        <v-col cols="12" class="text-center">
                            <span class="overline">Gestión</span>
                        </v-col>
                        <v-col class="text-center">
                            <span class="text-h1">{{ alumno.gestion }}</span>
                        </v-col>
                    </v-row>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col>

                    <v-row>
                        <v-col class="" cols="12">
                            <span class="overline">Nombre: <strong>{{ alumno.nombre }}</strong></span>
                        </v-col>
                        <v-col class="pt-0" cols="12">
                            <span class="overline">Teléfono: <strong>{{ alumno.telefono }}</strong></span>
                        </v-col>
                        <v-col class="pt-0" cols="12">
                            <span class="overline">Email: <strong>{{ alumno.email }}</strong></span>
                        </v-col>
                    </v-row>

                </v-col>
                
            </v-row>

            <v-divider class="mb-4 mt-3"></v-divider>

            <v-row class="mt-4" justify="center">
                <v-col cols="7">
                    <v-select v-model="estado" :items="estados_alumno" item-text="nombre" item-value="id" label="Estado" outlined></v-select>
                </v-col>
            </v-row>

            <v-row class="mb-4">
                <v-col class="text-center" cols="12">
                    <v-btn @click="setShow(false)" large elevation="0">
                        CANCELAR
                    </v-btn>
                    <v-btn :disabled="!estado" @click="actualizarGestion(estado)" type="submit" color="primary" class="ml-2" large elevation="0">
                        Actualizar
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    
    import { mapActions, mapMutations, mapState } from 'vuex'
    
    export default {
        data(){
            return{
                estado: null
            }
        },
        methods: {
            ...mapActions('alumnos', [
                'actualizarGestion'
            ]),
            ...mapMutations('modal', [
                'setShow'
            ])
        },
        computed: {

            ...mapState('alumnos', [
                'alumno',
                'estados_alumno'
            ])

        }
    }
</script>

<style>

</style>