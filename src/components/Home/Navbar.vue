<template>
    <div>

        <v-app-bar elevation="1" app color="white">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <v-list-item-content>
                        <v-list-item-title>
                            <h3>Plataforma Educativa</h3>
                        </v-list-item-title>
                    </v-list-item-content>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>
                        mdi-account-cog
                    </v-icon>
                </v-btn>
        </v-app-bar>

    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods: {

        doDrawer(){



        }
    },
    computed: {
        drawer:{
            get: function(){

                return this.$store.getters.getDrawer

            },
            set: function(){

                this.$store.commit('setDrawer', !this.drawer)

            }
        }
    }
}
</script>

<style>

</style>