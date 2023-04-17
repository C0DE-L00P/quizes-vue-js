<script setup>
import q from '../data/quizes.json'
import { ref, watch } from 'vue'
import Card from '../components/Card.vue'
import { RouterLink } from 'vue-router';


const subjects = ref(q)
const search = ref('')
watch(search, () => {
    subjects.value = q.filter((subject) => subject.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
    <div class="container">
        <header>
            <h1>Quizes</h1>
            <input type="text" placeholder="Search..." v-model="search">
        </header>
        <div class="options-container">
            <RouterLink :to="'/quiz/'+ subject.id" v-for="(subject, index) in subjects" :key="subject.id" style="text-decoration: inherit; color: inherit; cursor: auto;">
                <Card :subject="subject" />
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 1000px;
    margin: 0 auto
}

header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
}

header h1 {
    font-weight: bold;
    margin-right: 30px;
}

header input {
    border: none;
    background-color: rgba(128, 128, 128, 0.1);
    padding: 10px;
    border-radius: 5px;
}

.options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
}
</style>