<template>
    <div>
        <v-container>
            <v-row>
                <v-col>
                    <v-card color="basil">
                        <v-card-title class="text-center justify-center py-6">
                        <h1 class="font-weight-bold text-h4 basil--text">
                            Administración de Permisos
                        </h1>
                        </v-card-title>

                        <v-tabs
                        v-model="tab"
                        background-color="transparent"
                        color="basil"
                        grow
                        >
                            <v-tab
                                v-for="item in items"
                                :key="item"
                            >
                                {{ item }}
                            </v-tab>
                        </v-tabs>

                        <v-tabs-items v-model="tab">

                            <v-tab-item>
                                <v-card
                                    color="basil"
                                    flat
                                    class="pl-4 pr-4 pb-4 pt-4"
                                    min-height="600"
                                >
                                    <Roles></Roles>
                                </v-card>
                            </v-tab-item>

                             <v-tab-item>
                                <v-card
                                    color="basil"
                                    flat
                                    class="pl-4 pr-4 pb-4 pt-4"
                                    min-height="600"
                                >
                                    <Usuarios></Usuarios>
                                </v-card>
                            </v-tab-item>
                        </v-tabs-items>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>

    import Roles from '@/components/Permisos/Roles'
    import Usuarios from '@/components/Permisos/Usuarios'

    export default {
        components: {
            Roles,
            Usuarios
        },
        data(){
            return{
                items: [
                    "Roles", "Usuarios"
                ],
                tab: 0
            }
        }
    }
</script>

<style>

</style>