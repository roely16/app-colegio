<template>
    <div>
        <v-dialog :persistent="persistent" transition="dialog-bottom-transition" :max-width="width" v-model="show">
            <template v-slot:default>
                <v-card>
                    <v-toolbar color="primary" dark>
                        <v-btn :disabled="persistent" icon dark @click="setShow(false)">
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{ title }}</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    
                    <slot name="form"></slot>
                </v-card>
            </template>
      </v-dialog>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        props: {
            title: {
                type: String,
                default: null
            },
            width: {
                type: Number,
                default: 600
            }
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
            }
        },
        methods: {
            ...mapMutations('modal', [
                'setShow',
                'setPersistent'
            ])
        }
    }
</script>

<style>

</style>