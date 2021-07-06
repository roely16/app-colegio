<template>
    <div>

        <v-container fluid>
            <Header></Header>
        </v-container>

        <v-container fluid class="pl-10 pr-10">
            <Table></Table>
        </v-container>
    </div>
</template>

<script>

    import Header from '@/components/Alumnos/Header'
    import Table from '@/components/Alumnos/Table'

    export default {
        components: {
            Header,
            Table
        }
    }
</script>

<style>

    .table_container{
        background-color: #f5f5f5;
    }

</style>