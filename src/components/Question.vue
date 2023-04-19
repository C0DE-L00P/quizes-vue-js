<script setup>
import { defineProps } from 'vue';

const { question } = defineProps(['question'])

</script>

<template>
    <div v-if="question">
        
        <question-text class="question-container">
            <h1 class="question">
                {{ question.text }}
            </h1>
        </question-text>

        <answers-list class="options-container">
            <div class="option" v-for="choice, index in question.options.sort(() => .5 - Math.random())" :key="choice.id" @click="$emit('choose', choice)">
                <p class="option-label">{{ ['A', 'B', 'C', 'D'][index] }}</p>
                <div class="option-value">
                    <p>{{ choice.text }}</p>
                </div>
            </div>
        </answers-list>
    </div>
</template>

<style scoped>
.question-container {
    margin-top: 20px;
}

.question {
    font-size: 40px;
    margin-bottom: 20px;
}

.option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
}

.option-label {
    text-align: center;
    background-color: bisque;
    width: 50px;
    height: 50px;
    font-size: 30px;
    justify-content: center;
    align-items: center;
}

.option-value {
    background-color: rgb(244, 239, 239);
    width: 100%;
    font-size: 30px;
    padding: 0 20px;
}
</style>