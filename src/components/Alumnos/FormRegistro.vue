<template>
    <div>
        <v-container fluid>
        
            <v-row>
                <v-col class="pl-0 pr-0">
                    <v-tabs v-model="tab" vertical>
                        <v-tab>
                            <v-icon color="success" v-if="valid_alumno" left>mdi-check</v-icon>
                            Alumno
                        </v-tab>
                        <v-tab>
                            <v-icon color="success" v-if="valid_encargado" left>mdi-check</v-icon>
                            Encargado
                        </v-tab>
                        <v-tab>
                            <v-icon color="success" v-if="valid_papeleria" left>mdi-check</v-icon>
                            Papeleria
                        </v-tab>

                        <v-tab-item class="form">
                            <FormAlumno></FormAlumno>
                        </v-tab-item>
                        <v-tab-item class="form">
                            <TipoEncargado></TipoEncargado>
                        </v-tab-item>
                        <v-tab-item class="form">
                            <FormPapeleria></FormPapeleria>
                        </v-tab-item>
                    </v-tabs>
                </v-col>
            </v-row>
        
        </v-container>
    </div>
</template>

<script>

    import FormAlumno from '@/components/Alumnos/FormAlumno'
    import TipoEncargado from '@/components/Alumnos/TipoEncargado'
    import FormPapeleria from '@/components/Alumnos/FormPapeleria'
    
    import { mapMutations } from 'vuex'

    export default {
        components: {
            FormAlumno,
            TipoEncargado,
            FormPapeleria
        },
        data(){
            return{
                valid: true,
                snackbar: true,
                text: "El "
            }
        },
        methods: {
            ...mapMutations('alumnos',[
                'setTab'
            ])
        },
        computed:{
            valid_alumno(){
                return this.$store.state.alumnos.valid_alumno
            },
            valid_encargado(){
                return this.$store.state.alumnos.valid_encargado
            },
            valid_papeleria(){
                return this.$store.state.alumnos.valid_papeleria
            },
            tab:{
                get(){
                    return this.$store.state.alumnos.tab
                },
                set(val){
                    this.setTab(val)
                }
            }
        }
    }
</script>

<style>
    .form{
        min-height: 450px;
    }
</style>