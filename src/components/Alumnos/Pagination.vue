<template>

    <v-row class="mt-2" v-if="pageCount > 1">
        <v-col align="start" cols="12">
            <v-pagination class="pag" circle :length="pageCount" v-model="page"></v-pagination>
        </v-col>
    </v-row>
    
</template>

<script>
import { mapMutations, mapState } from 'vuex'
    export default {
        data(){
            return{
                length: 8,
            }
        },
        methods: {
            ...mapMutations('alumnos', [
                'setPage'
            ])
        },
        computed: {
            page: {
                get(){
                    return this.$store.state.alumnos.page
                },
                set(val){
                    this.setPage(val)
                }
            },
            ...mapState('alumnos', [
                'pageCount'
            ])
        }
    }
</script>

<style>
    .pag{
        justify-content: start;
    }
</style>