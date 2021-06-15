<template>
    <div>
        <v-row justify="center">
            <v-col cols="6">
                <v-card class="pt-10 pb-10 pr-10 pl-10" min-height="300" >
                    <v-card-text>
                        <v-form @submit.prevent="doLogin()" ref="form" v-model="valid">

                            <v-row>
                                <v-col>
                                    <v-text-field 
                                        v-model="login.user"  
                                        prepend-inner-icon="mdi-account" 
                                        autocomplete="off" 
                                        label="Usuario" 
                                        outlined
                                        clearable
                                        :rules="[v => !!v]"
                                        hide-details
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-text-field 
                                        v-model="login.pass"
                                        autocomplete="off" 
                                        prepend-inner-icon="mdi-lock" 
                                        label="Contraseña" 
                                        outlined
                                        clearable
                                        type="password"
                                        :rules="[v => !!v]"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            
                            <v-row>
                                <v-col>
                                    <v-alert type="error" dense dismissible>
                                        {{ messageError }}
                                    </v-alert>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" class="text-center">
                                    <v-btn type="submit" large color="primary">
                                        Ingresar 
                                        <v-icon>
                                            mdi-login
                                        </v-icon>
                                    </v-btn>
                                </v-col>
                            </v-row>
                             
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                login: {
                    user: null,
                    pass: null
                },
                valid: true
            }
        },
        methods: {

            doLogin(){

                this.$refs.form.validate()

                if (this.valid) {
                    
                    this.$store.dispatch('doLogin', this.login)

                }

            }

        },
        computed: {

            messageError(){

                return this.$store.getters.getMessageError

            }
        }
        
    }
</script>

<style>

</style>