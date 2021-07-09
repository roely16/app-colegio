<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-btn @click="()=> {
                    this.setTitle('Proceso de Inscripción')
                    this.setWidth(800)
                    this.setContent('FormRegistro')
                    this.setShow(true)
                    }">Iniciar Proceso</v-btn>
                <v-btn>Verificar Proceso</v-btn>
            </v-col>
        </v-row>
        <Modal></Modal>
    </v-container>
</template>

<script>
import Modal from '@/components/Modal'
import { mapMutations } from 'vuex'

export default{
    components: {
        Modal,
    },
    methods: {
        ...mapMutations('modal', [
            'setShow',
            'setTitle',
            'setWidth',
            'setContent'
        ])
    }
}
</script>
