<script setup>
import q from '../data/quizes.json'
import { ref, watch } from 'vue'
import { Card } from '../components'
import { RouterLink } from 'vue-router';


const subjects = ref(q)
const search = ref('')
watch(search, () => {
    subjects.value = q.filter((subject) => subject.name.toLowerCase().includes(search.value.toLowerCase()))
})
function addTosessionStorage(subjectSelected){
    sessionStorage.subject = subjectSelected
}
</script>

<template>
    <div class="container">
        <header>
            <h1>Quizes</h1>
            <input type="text" placeholder="Search..." v-model="search">
        </header>
        <div class="options-container">
            <RouterLink class="reset-link-style" :to="'/quiz/' + subject.id" v-for="subject in subjects" @click="addTosessionStorage(subject.id)"
                :key="subject.id">
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

.reset-link-style {
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
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
}</style>