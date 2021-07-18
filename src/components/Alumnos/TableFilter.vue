<template>

    <v-row  class="pt-2">
        <v-col cols="12" md="3" sm="5">
            <v-tabs background-color="#f5f5f5" v-model="toggle">
                <v-tab>En Proceso 
                </v-tab>
                <v-tab>Inscritos 
                </v-tab>
            </v-tabs>
        </v-col>
        <v-col cols="12" offset-md="6" md="3" sm="4" offset-sm="3">
            <v-text-field  prepend-inner-icon="mdi-magnify" label="Buscar" dense outlined background-color="white"></v-text-field>
        </v-col>
    </v-row>

</template>

<script>
    
    import { mapActions, mapMutations } from 'vuex'
    
    export default {
        data(){
            return{
            }
        },
        methods: {
            ...mapMutations('alumnos', [
                'setToggle'
            ]),
            ...mapActions('alumnos', [
                'obtenerAlumnos'
            ])
        },  
        computed: {
            toggle: {
                get(){
                    return this.$store.state.alumnos.toggle
                },
                set(val){
                    this.setToggle(val)
                }
            }
        },
        watch: {
            toggle: function(){
                this.obtenerAlumnos()
            }
        }
    }
</script>

<style>

</style>