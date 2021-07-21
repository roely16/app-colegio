<template>
    <div>

        <v-card>

            <v-card-text class="pr-0 mt-0 pt-0">
                <Header>
                    <template #actions>
                        <v-btn @click="() => {
                            setContent('FormGestion')
                            setTitle('Ingresar Gestión')
                            setWidth('600')
                            setShow(true)    
                        }" elevation="0">Crear 
                            <v-icon>
                                mdi-plus
                            </v-icon>
                        </v-btn>
                    </template>
                </Header>
            </v-card-text>

            <v-card-text>

                <v-data-table hide-default-footer :items="gestiones" :headers="headers" @page-count="pageCount = $event" :items-per-page="10" :page.sync="page">
                    
                    <template v-slot:[`item.action`]="{}">
                        <v-btn icon small>
                            <v-icon>
                                mdi-eye
                            </v-icon>
                        </v-btn>
                    </template>

                </v-data-table>

            </v-card-text>
        </v-card>

        <Modal></Modal>

    </div>
</template>

<script>

    import Header from '@/components/General/Header'
    import Modal from '@/components/Modal'

    import { mapActions, mapMutations, mapState } from 'vuex'

    export default {
        components: {
            Header,
            Modal
        },
        props: {
            alumno_id: Number
        },
        data(){
            return{
                pageCount: 10,
                page: 1
            }
        },
        methods: {
            ...mapActions('gestion', [
                'gestionesAlumno'
            ]),
            ...mapMutations('modal', [
                'setShow',
                'setTitle', 
                'setWidth',
                'setContent'
            ])
        },
        computed: {
            ...mapState('gestion', [
                'gestiones',
                'headers'
            ])
        },
        mounted(){

            this.gestionesAlumno(this.alumno_id)

        }
    }
</script>

<style>

</style>