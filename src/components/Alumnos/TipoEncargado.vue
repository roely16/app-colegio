<template>
    <div class="pt-2 pl-4 pr-4">
        <v-row align="center" justify="center" v-if="nuevo_encargado === null">
            <v-col cols="12">
                <v-alert type="info" border="top" colored-border>
                    Seleccione el tipo de encargado que desea agregar.
                </v-alert>
            </v-col>
            <v-col cols="4">
                <v-card @click="setNuevoEncargado(false)" outlined>
                    <v-img
                        :src="require('@/assets/img/search.png')"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                        contain
                        
                    >
                        <v-card-title>Existente</v-card-title>
                    </v-img>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card @click="setNuevoEncargado(true)" outlined>
                    <v-img
                        :src="require('@/assets/img/add-user.png')"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    >
                        <v-card-title>Nuevo</v-card-title>
                    </v-img>
                </v-card>
            </v-col>
        </v-row>

        <v-row v-if="nuevo_encargado != null">
            <v-col cols="12" align="end">
                <v-btn @click="setNuevoEncargado(null)" color="primary" text>
                    <v-icon left>mdi-arrow-left</v-icon>
                    Regresar
                </v-btn>
            </v-col>
        </v-row>

        <FormEncargado v-if="nuevo_encargado"></FormEncargado>

        <FormEncargadoExistente v-if="nuevo_encargado === false"></FormEncargadoExistente>

    </div>
</template>

<script>
    
    import { mapMutations, mapState } from 'vuex'

    import FormEncargado from '@/components/Alumnos/FormEncargado'
    import FormEncargadoExistente from '@/components/Alumnos/FormEncargadoExistente'
    
    export default {
        components: {
            FormEncargado,
            FormEncargadoExistente
        },
        methods: {
            ...mapMutations('alumnos', [
                'setNuevoEncargado'
            ])
        },
        computed: {
            ...mapState('alumnos', [
                'nuevo_encargado'
            ])
        }
    }
</script>

<style>

</style>