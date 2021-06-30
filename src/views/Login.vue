<template>
    <div>

        <v-container fluid class="login">

            <v-row align="center" style="height: 100vh">
                <v-col cols="6">

                    <Header></Header>

                    <Form></Form>

                    <Footer></Footer>

                </v-col>
                <v-col class="pt-0 mt-0 pb-0 mb-0" cols="6">

                    <SideImage></SideImage>

                </v-col>
            </v-row>

        </v-container>

    </div>
</template>

<script>

    import Header from '@/components/Login/Header'
    import Form from '@/components/Login/Form'
    import Footer from '@/components/Login/Footer'
    import SideImage from '@/components/Login/Image'

    export default {
        data: () => ({
            //
        }),
        components: {
            Header,
            Form,
            Footer,
            SideImage
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