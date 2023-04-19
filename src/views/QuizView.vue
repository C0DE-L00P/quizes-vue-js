<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import q from '../data/quizes.json'
import { Question } from '../components'

const { id } = useRoute().params;
const subject = q.find(iSubject => iSubject.id == id)
const currentQuestion = ref(1)
const router = useRouter();
let result = 0;

const chooseAnswer = (answer)=> {
    //check if correct
    console.log('Chosen Asnwer', answer)
    if(answer.isCorrect) result++;
    console.log('result',result)
    
    //change questions counter
    if(currentQuestion.value < subject.questions.length) currentQuestion.value++
    else {
        sessionStorage.result =  result
        router.push('/result');
    }
}

</script>

<template>
    <div v-if="subject" style="margin-inline: 32px;">
        <header>
            <h4>Question {{currentQuestion}}/{{subject.questions.length}}</h4>
            <div class="bar">
                <div class="completion" :style="{width: `${((currentQuestion-1)/subject.questions.length)*100}%`}"></div>
            </div>
        </header>

        <Question
            :question="subject.questions[currentQuestion-1]" :key="subject.questions[currentQuestion-1].id" @choose="chooseAnswer"/>

    </div>

    <div v-else>No Such a subject</div>
</template>

<style scoped>
header {
    margin-top: 20px;
}

header h4 {
    font-size: 30px;
}

.bar {
    width: 300px;
    height: 50px;
    border: 3px solid bisque;
}

.completion {
    height: 100%;
    width: 0%;
    background-color: bisque;
}
</style>