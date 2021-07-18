<template>
    <div>

        <v-container fluid>
            <Header title="Alumnos">
                <template #actions>
                    <v-btn elevation="0">Exportar</v-btn>
                    <v-btn @click="() => {
                        setShow(true) 
                        setTitle('Registrar nuevo alumno')
                        setWidth(800)
                        setContent('FormRegistro')
                        resetForm()
                    }" elevation="0" color="primary" class="ml-2">Crear 
                        <v-icon>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </template>
            </Header>
        </v-container>

        <v-container fluid class="pl-10 pr-10">
            <Table></Table>
        </v-container>

        <Modal ref="modal"></Modal>
    </div>
</template>

<script>

    import Header from '@/components/General/Header'
    import Table from '@/components/Alumnos/Table'

    import { mapActions, mapMutations } from 'vuex'

    import Modal from '@/components/Modal'

    export default {
        components: {
            Header,
            Table,
            Modal
        },
        methods: {
            ...mapMutations('modal', [
                'setShow',
                'setPersistent',
                'setTitle',
                'setWidth',
                'setContent'
            ]),
            ...mapActions('alumnos', [
                'resetForm',
            ])
        }
    }
</script>

<style>

    .table_container{
        background-color: #f5f5f5;
    }

</style>