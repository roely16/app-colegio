<template>
    <div>
        <v-row class="ml-4 mr-4 pb-2 pt-10">
            <v-col>
                <span class="text-h4">{{ title }}</span>
            </v-col>
            <v-col align="end">
                <slot name="actions">

                </slot>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    
    import { mapActions, mapMutations } from 'vuex'

    export default {
        props: {
            title: String
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