<script setup>
import { defineProps } from 'vue';

const { subject } = defineProps(['subject'])
</script>

<template>
    <div class="card">
        <img :src="subject.img" :alt="subject.name">
        <div class="card-text">
            <h2>{{ subject.name }}</h2>
            <p>{{ subject.questions.length + ' questions' }}</p>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 310px;
    overflow: hidden;
    border-radius: 2%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    margin-right: 20px;
    cursor: pointer;
    transition-duration: 0.3s;
}

.card:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}

.card img {
    width: 100%;
    height: 190px;
    margin: 0
}

.card .card-text {
    padding: 0 16px;
}

.card .card-text h2 {
    font-weight: bold;
    margin-bottom: 4px;
}

.card .card-text p {
    margin-bottom: 12px;
}</style>