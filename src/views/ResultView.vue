<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const result = sessionStorage.getItem('result')?? 0
const subject = sessionStorage.getItem('subject');
sessionStorage.clear()

if(!subject) router.push('/')

function tryAgain(){
    sessionStorage.setItem('subject', subject);
    router.push('/quiz/'+subject)
}

</script>

<template>
    <div class="result-container">
        <h2>Your result is </h2>
        <h1>{{ result }}/3</h1>
        <div class="btns-container">
            <button @click="router.push('/')">Go Back</button>
            <button @click="tryAgain">Try Again</button>
        </div>
    </div>
</template>

<style scoped>
.result-container{
    display: grid;
    place-content: center;
    height: 100vh;
    text-align: center;
}
.btns-container {
    display: flex;
    gap: 8px;
    margin-top: 24px;
}

.btns-container button {
    background-color: bisque;
    color: black;
    border-radius: 8px;
    padding-inline: 24px;
    padding-top: 4px;
    padding-bottom: 4px;
    cursor: pointer;
    border: 1px solid transparent;
}

.btns-container button:hover {
    filter: brightness(0.98);
}

.btns-container button:active {
    filter: brightness(0.95);
}
</style>