<template>
    <div class="pt-2 pl-4 pr-4">
        
        <v-form v-model="valid" ref="form" @submit.prevent="registrar()">
            <v-row>
                <v-col cols="6">
                    <v-text-field v-model="encargado.primer_nombre" :rules="[v => !!v]" autocomplete="off" hide-details label="Nombre" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="encargado.primer_apellido" :rules="[v => !!v]" autocomplete="off" hide-details label="Apellido" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="encargado.telefono" :rules="[v => !!v]" autocomplete="off" type="number" hide-details label="Teléfono" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="encargado.email" autocomplete="off" type="email" hide-details label="Email" outlined></v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="encargado.direccion" autocomplete="off" type="text" hide-details label="Dirección" outlined></v-text-field>
                </v-col>
            </v-row>

            <v-row class="mt-4 mb-4">
                <v-col>
                    <v-btn @click="atras()" large elevation="0">
                        Atrás
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
import { mapMutations } from 'vuex'
    export default {
        data(){
            return{
                valid: true,
                encargado: {
                    primer_nombre: null,
                    primer_apellido: null,
                    telefono: null,
                    email: null,
                    direccion: null
                }
            }
        },
        methods: {
            atras(){
                
                this.setTab(0)
            },
            registrar(){
                this.$refs.form.validate()

                if (this.valid) {
                    
                    this.setValidEncargado(true)
                    this.setTab(2)
                    this.setEncargado(this.encargado)
                    
                }
            },
            ...mapMutations('alumnos',[
                'setValidEncargado',
                'setTab',
                'setEncargado'
            ])
        }
    }
</script>

<style>

</style>