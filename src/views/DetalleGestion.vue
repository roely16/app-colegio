<template>
    <div>
        <v-container>
            <v-row class="mt-10">
                <v-col>
                    <Buscar></Buscar>
                </v-col>
            </v-row>

            <v-row v-if="gestion">
                <v-col>
                    <DetalleAlumno></DetalleAlumno>
                </v-col>
            </v-row>

            <v-row v-if="gestion">
                <v-col>
                    <DetalleGestion></DetalleGestion>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    
    import Buscar from '@/components/Gestion/Buscar'
    import DetalleAlumno from '@/components/Gestion/DetalleAlumno'
    import DetalleGestion from '@/components/Gestion/DetalleGestion'
    
    import { mapState } from 'vuex'

    export default {

        components: {
            Buscar,
            DetalleAlumno,
            DetalleGestion
        },
        computed: {
            ...mapState('gestion', [
                'gestion'
            ])
        }

    }
</script>

<style>

</style>