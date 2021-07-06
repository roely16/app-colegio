<template>
    <div class="pt-2 pl-4 pr-4">
        
        <v-form v-model="valid" ref="form" @submit.prevent="registrar()">
            <v-row>
                <v-col cols="6">
                    <v-text-field v-model="alumno.primer_nombre" :rules="[v => !!v]" autocomplete="off" hide-details label="Primer Nombre" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="alumno.segundo_nombre" autocomplete="off" hide-details label="Segundo Nombre" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="alumno.primer_apellido" :rules="[v => !!v]" autocomplete="off" hide-details label="Primer Apellido" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="alumno.segundo_apellido" autocomplete="off" hide-details label="Segundo Apellido" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="alumno.telefono" autocomplete="off" type="number" hide-details label="Teléfono" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="alumno.email" autocomplete="off" type="email" hide-details label="Email" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="alumno.fecha_nacimiento" :rules="[v => !!v]" autocomplete="off" type="date" hide-details label="Fecha de Nacimiento" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="alumno.direccion" autocomplete="off" type="text" hide-details label="Dirección" outlined></v-text-field>
                </v-col>
            </v-row>

            <v-row class="mt-4 mb-4">
                <v-col>
                    <v-btn :disabled="persistent" @click="setShow(false)" large elevation="0">
                        Cancelar
                    </v-btn>
                    <v-btn type="submit" color="primary" class="ml-2" large elevation="0">
                        Continuar
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
            
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
        data(){
            return{
                valid: true,
                alumno: {
                    primer_nombre: null,
                    segundo_nombre: null,
                    primer_apellido: null,
                    segundo_apellido: null,
                    telefono: null,
                    email: null,
                    fecha_nacimiento: null,
                    direccion: null
                }
            }
        },
        methods: {
            registrar(){

                this.$refs.form.validate()

                if (this.valid) {

                    this.setValidAlumno(true)
                    this.setTab(1)
                    this.setAlumno(this.alumno)

                }
            },
            ...mapMutations('alumnos',[
                'setValidAlumno',
                'setTab',
                'setAlumno'
            ]),
            ...mapMutations('modal', [
                'setShow'
            ])
        },
        computed: {
            ...mapState('modal', [
                'persistent'
            ])
        }
    }
</script>

<style>

</style>