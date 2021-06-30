<template>
    <div>
        <img class="bk_image" :src="require('@/assets/img/books.jpg')" alt="">
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

    .bk_image{
        object-fit: contain;
        max-height: 100vh;
    }

</style>