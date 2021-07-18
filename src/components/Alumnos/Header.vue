<template>
    <div>
        <v-row class="ml-4 mr-4 pb-2 pt-10">
            <v-col>
                <span class="text-h4">Alumnos</span>
            </v-col>
            <v-col align="end">
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
            </v-col>
        </v-row>

        <Modal ref="modal"></Modal>
    </div>
</template>

<script>

    import Modal from '@/components/Modal'
    // import FormRegistro from '@/components/Alumnos/FormRegistro'
    
    import { mapActions, mapMutations } from 'vuex'

    export default {
        components: {
            Modal,
            // FormRegistro
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

</style>