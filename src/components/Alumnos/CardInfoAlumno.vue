<template>
    <div>
        <v-card elevation="0">
            <v-card-text>

                <v-row>
                    <v-col cols="10">
                        <v-row>
                            <v-col cols="3">
                                <small class="font-weight-bold">Nombre: </small>
                                <p class="overline pb-0">{{ info_alumno.nombre_completo }}</p>
                            </v-col>
                            <v-col cols="3">
                                <small class="font-weight-bold">Email: </small>
                                <p class="overline info-student">{{ info_alumno.email }}</p>
                            </v-col>
                            <v-col cols="2">
                                <small class="font-weight-bold">Teléfono: </small>
                                <p class="overline info-student">{{ info_alumno.telefono }}</p>
                            </v-col>
                            <v-col cols="3">
                                <small class="font-weight-bold">Fecha de Nacimiento: </small>
                                <p class="overline">{{ info_alumno.fecha_nacimiento }}</p>
                            </v-col>
                            <v-col cols="3">
                                <small class="font-weight-bold">Dirección: </small>
                                <p class="overline info-student">
                                   {{ info_alumno.direccion }}
                                </p>
                            </v-col>
                            <v-col cols="6">
                                <small class="font-weight-bold">Grado: </small>
                                <p class="overline">
                                    NO DISPONIBLE
                                </p>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col align="center" cols="2">
                        <v-img width="200" :src="require('@/assets/icons/student.png')"></v-img>
                    </v-col>
                </v-row>

            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    
    import { mapActions, mapState } from 'vuex'
    
    export default {
        props: {
            alumno_id: Number
        },
        methods: {
            ...mapActions('alumnos', [
                'infoAlumno'
            ])
        },
        computed: {
            ...mapState('alumnos', [
                'info_alumno'
            ])
        },
        mounted(){

            this.infoAlumno(this.alumno_id)

        }
    }
</script>

<style>
    p{
        margin-bottom: 0px;
    }
</style>