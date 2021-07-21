<template>
    <div>

        <v-container>

            <v-row class="mt-2">
                <v-col>
                    <v-breadcrumbs large :items="items"></v-breadcrumbs>
                </v-col>
            </v-row>

            <v-row class="ml-2 mr-2">
                <v-col cols="12">
                    <CardInfoAlumno :alumno_id="alumno_id"></CardInfoAlumno>
                </v-col>
            </v-row>

            <v-row class="ml-2 mr-2">
                <v-col>

                    <v-tabs background-color="#f5f5f5">
                        <v-tab>Gestiones</v-tab>
                        <v-tab>Calificaciones</v-tab>
                        <v-tab>Reportes</v-tab>
                        <v-tab>Pagos</v-tab>
                    </v-tabs>

                    <v-tabs-items class="mt-4" v-model="tab">
                        <v-tab-item>
                            <GestionesAlumno :alumno_id="alumno_id"></GestionesAlumno>
                        </v-tab-item>
                    </v-tabs-items>

                </v-col>
            </v-row>

        </v-container>

    </div>
</template>

<script>

    /* eslint-disable vue/no-unused-components */

    import Header from '@/components/General/Header'
    import CardInfoAlumno from '@/components/Alumnos/CardInfoAlumno'
    import GestionesAlumno from '@/components/Alumnos/GestionesAlumno'

    export default {
        components: {
            Header,
            CardInfoAlumno,
            GestionesAlumno
        },
        data(){
            return{

                items: [
                    {
                        text: 'Alumnos',
                        disabled: false,
                        href: '#/home/alumnos_encargado',
                    },
                    {
                        text: 'Detalle del Alumno',
                        disabled: true,
                        href: 'breadcrumbs_link_2',
                    },
                ],
                tab: 0,
                tabs: [

                ],
                alumno_id: parseInt(this.$route.params.id)

            }
        }

    }
</script>

<style>

</style>