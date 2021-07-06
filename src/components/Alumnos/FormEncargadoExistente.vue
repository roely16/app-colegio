<template>
    <div>
        <v-form>
            <v-row justify="center">
                <v-col cols="8">
                    <v-text-field prepend-inner-icon="mdi-magnify" :rules="[v => !!v]" autocomplete="off" hide-details label="DPI de Encargado" outlined></v-text-field>
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="8">

                    <v-card min-height="200" outlined>

                    </v-card>

                </v-col>
            </v-row>
        </v-form>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>