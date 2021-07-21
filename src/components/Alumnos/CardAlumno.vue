<template>
    <div>
        <v-card outlined>
            <v-list-item three-line>
                <v-list-item-content>
                    <div class="text-overline">Nombre:</div>
                    <v-list-item-subtitle>
                        {{ student.primer_nombre }} {{ student.primer_apellido }}
                    </v-list-item-subtitle>

                    <div class="text-overline mt-2">Email:</div>
                    <v-list-item-subtitle>
                        {{ student.email }}
                    </v-list-item-subtitle>

                    <div class="text-overline mt-2">Grado:</div>
                    <v-list-item-subtitle>
                        Pendiente
                    </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                    <v-img :src="require('@/assets/icons/student.png')"></v-img>
                </v-list-item-avatar>
            </v-list-item>
            
            <v-card-actions>
                
                <v-btn :to="{name: 'detalle_alumno', params: {id: student.id}}" text>
                    Detalle
                </v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
    export default {
        props: {
            student: Object
        }
    }
</script>

<style>

</style>