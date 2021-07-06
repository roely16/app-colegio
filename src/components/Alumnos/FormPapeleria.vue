<template>
    <div class="pt-2 pl-4 pr-4">
        <v-form ref="form" v-model="valid" @submit.prevent="registrar()">

            <v-row>
                <v-col>
                    <v-alert type="info" border="top" colored-border>
                        Es necesario adjuntar los siguientes documentos:

                        <ul class="mt-4">
                            <li>DPI del Encargado</li>
                            <li>Certificados de Grados Aprobados</li>
                        </ul>
                    </v-alert>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-file-input :rules="[v => !!v]" @change="() => this.setValidPapeleria(true)" v-model="papeleria" show-size counter label="Adjuntar Documentos" multiple outlined></v-file-input>
                </v-col>
            </v-row>

            <v-row class="mt-4 mb-4">
                <v-col>
                    <v-btn @click="atras()" large elevation="0">
                        Atrás
                    </v-btn>
                    <v-btn :loading="saving" :disabled="(!valid_alumno || !valid_encargado || !valid_papeleria) || saving " type="submit" color="primary" class="ml-2" large elevation="0">
                        Registrar
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>

    import { mapActions, mapMutations, mapState } from 'vuex'

    export default {
        data(){
            return{
                papeleria: null,
                valid: true
            }
        },
        methods: {
            atras(){
                this.setTab(1)
            },
            registrar(){
                this.$refs.form.validate()

                if (this.valid) {
                    this.setPapeleria(this.papeleria)
                    this.registrarAlumno()
                }
            },
            ...mapMutations('alumnos', [
                'setTab',
                'setPapeleria',
                'setValidPapeleria'
            ]),
            ...mapActions('alumnos', [
                'registrarAlumno'
            ])
        },
        computed: {
            ...mapState('alumnos', [
                'valid_alumno',
                'valid_encargado',
                'valid_papeleria',
                'saving' 
            ])
        }
    }
</script>

<style>

</style>