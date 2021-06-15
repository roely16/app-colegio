<template>
    <div class="mt-2">
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
            <v-row class="mt-6">
                <v-col cols="3" v-for="(rol, key) in roles" :key="key">
                    
                    <v-card shaped outlined>
                        
                        <v-card-text>
                            <v-img width="70" :src="require('@/assets/icons/' + rol.icon)"></v-img>

                            <span class="overline">{{ rol.nombre }}</span>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                            <v-btn color="primary" x-small icon>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>

                            <v-btn color="error" x-small icon>
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    
    computed: {

        roles(){

            return this.$store.getters.getRoles

        }

    },
    mounted(){

        this.$store.dispatch('getRoles')

    }

}
</script>