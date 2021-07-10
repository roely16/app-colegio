<template>
    <div>
        <v-row justify="center">
            <v-col cols="6">
                <v-text-field v-model="gestion" @click:append="detalleGestion(gestion)" placeholder="Número de gestión" append-icon="mdi-magnify" solo single-line></v-text-field>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
    export default {
        data(){
            return{
                gestion: null
            }
        },
        methods: {
            ...mapActions('gestion', [
                'detalleGestion'
            ])
        }
    }
</script>

<style>

</style>