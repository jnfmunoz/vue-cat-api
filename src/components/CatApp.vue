<script setup>
    import { ref } from 'vue';
    import { getRandomCat } from '../cats/cats-app';

    const catImage = ref(null);

    const updateImage = async () => {
        catImage.value = await getRandomCat();
    }

    defineProps({
        title: String,
    });
</script>

<template>
    <h1>{{ title }}</h1>

    <div class="card">
        <button type="button" @click="updateImage">Click me!</button>        
    </div>

    <div v-if="catImage">
        <img :src="catImage" alt="Random Cat" style="width: 300px; height: 300px;"/>
    </div>

</template>