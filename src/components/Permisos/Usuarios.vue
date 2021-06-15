<template>
    <div>
        <v-container>

            <v-row align="center">
                <v-col cols="4">
                    <v-text-field clearable label="Buscar" prepend-inner-icon="mdi-magnify" hide-details dense outlined></v-text-field>
                </v-col>
                <v-col align="end">
                    <v-btn color="success">
                        <v-icon>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-data-table :items="data_table.items" :headers="data_table.headers">

                        <template v-slot:[`item.action`]="{  }">
                            
                            <v-btn color="primary" x-small icon>
                                <v-icon>
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                            <v-btn color="error" x-small icon>
                                <v-icon>
                                    mdi-delete
                                </v-icon>
                            </v-btn>
                        </template>

                    </v-data-table>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {

    computed: {
        data_table(){

            const items = this.$store.getters.getItems

            const headers = this.$store.getters.getHeaders

            return {
                items: items,
                headers: headers
            }

        }
    },
    mounted(){

        this.$store.dispatch('getUsuarios')

    }
}
</script>