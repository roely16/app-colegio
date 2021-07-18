<template>
    <div>
        <v-container fluid>
            <Header title="Alumnos"></Header>
        </v-container>

        <v-container fluid>
            <v-row>
                <v-col cols="12" md="4" v-for="(alumno, key) in alumnos" :key="key">
                    <CardAlumno :student="alumno"></CardAlumno>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

    import Header from '@/components/General/Header'
    import CardAlumno from '@/components/Alumnos/CardAlumno'
    
    import { mapActions, mapState } from 'vuex'

    export default {
        components: {
            Header,
            CardAlumno
        },
        methods: {
            ...mapActions('alumnos_encargado', [
                'obtener_alumnos'
            ])
        },
        computed: {
            ...mapState('alumnos_encargado', [
                'alumnos'
            ])
        },
        mounted(){
            
            this.obtener_alumnos()

        }
    }
</script>

<style>

</style>