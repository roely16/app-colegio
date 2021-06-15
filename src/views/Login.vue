<template>
    <div>

        <v-container fluid class="login">

            <v-row align="center" style="height: 100vh">
                <v-col>

                    <Header></Header>

                    <Form></Form>

                    <Footer></Footer>

                </v-col>
            </v-row>

        </v-container>

    </div>
</template>

<script>

    import Header from '@/components/Login/Header'
    import Form from '@/components/Login/Form'

    import Footer from '@/components/Login/Footer'

    export default {
        data: () => ({
            //
        }),
        components: {
            Header,
            Form,
            Footer
        },
        computed: {
            dataLogin(){

                return this.$store.getters.getLogin
            }
        }
    };

</script>

<style>

    .login{

        min-height: 100vh;

    }

</style>