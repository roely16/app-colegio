<template>
    <div>
        <v-row justify="center">
            <v-col cols="8">

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
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    
                    <v-row v-if="messageError">
                        <v-col>
                            <v-alert type="error" dense dismissible>
                                {{ messageError }}
                            </v-alert>
                        </v-col>
                    </v-row>

                    <v-row align="center" class="mb-2 mt-0">
                        <v-col>
                            <v-checkbox hide-details label="Mantenerse conectado" value="value"></v-checkbox>
                        </v-col>
                        <v-col align="end">
                            <a href="">¿Olvido su contraseña?</a>
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