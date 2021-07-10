<template>
    <div>
        <v-row justify="center">
            <v-col cols="8">

                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Proceso
                        </th>
                        <th class="text-left">
                            Fecha
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(detalle, key) in detalle_gestion" :key="key">
                            <td>
                                {{ detalle.nombre }}
                            </td>
                            <td>
                                {{ detalle.created_at }}
                            </td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>

            </v-col>
        </v-row>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    
    export default {

        computed: {
            ...mapState('gestion', [
                'detalle_gestion'
            ])
        }

    }
</script>

<style>

</style>