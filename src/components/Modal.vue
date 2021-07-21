<template>
    <div>
        <v-dialog :persistent="persistent" transition="dialog-bottom-transition" :max-width="width" v-model="show">
            <template v-slot:default>
                <v-card>
                    <v-toolbar color="primary" dark>
                        <v-btn :disabled="persistent" icon dark @click="() => {
                            setShow(false)
                            setContent(null)    
                        }">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{ title }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <component v-bind:is="content"></component>

                </v-card>
            </template>
      </v-dialog>
    </div>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'

    export default {
        components: {
            'FormRegistro': () => import('./Alumnos/FormRegistro.vue'),
            'FormAlumno': () => import('./Alumnos/FormAlumno.vue'),
            'FormProceso': () => import('./Alumnos/FormProceso.vue'),
            'FormGestion': () => import('./Alumnos/NuevaGestion.vue')
        },
        data(){
            return{
                dialog: false,
            }
        },
        computed: {
            show: {
                get(){
                    return this.$store.state.modal.show
                },
                set(val){
                    this.setShow(val)
                }
            },
            persistent: {
                get(){
                    return this.$store.state.modal.persistent
                },
                set(val){
                    this.setPersistent(val)
                }
            },
            componentFile(){

                return () => import(`./${this.content}.vue`);

            },
            ...mapState('modal', [
                'width',
                'title',
                'content'
            ])
        },
        methods: {
            ...mapMutations('modal', [
                'setShow',
                'setPersistent',
                'loadForm',
                'setContent'
            ]),
        }
    }
</script>

<style>

</style>