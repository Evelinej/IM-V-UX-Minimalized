<template>
  <section class="quiz" v-if="!funQuiz1">
    <h2 style="grid-column-start: 2;">Take the Quiz!</h2>

    <FunQuestion1 @variableChanged="handleVariableChange" />
  </section>
  <section class="congrats" v-else>
    <h2>Gratuliere!</h2>
    <p>Du hast das Quiz geschafft!</p>
  </section>
</template>

<script setup>
// Funktionalität importieren
import { ref } from "vue";

// Komponente importieren
import FunQuestion1 from "@/components/FunQuestion1.vue";


//// Emit handling ////
// Variablen
const emits = ['variableChanged'];

const funQuiz1 = ref(false);

// Funktionen
const handleVariableChange = (value) => {
  funQuiz1.value = value;
};




</script>

<style>
.quiz {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 5px;
  grid-template-areas:
    ". . .";
}

.question {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10fr;
  grid-template-areas:
    "."
    ".";
  grid-column-start: 2;
  height: 60vh;
}

.tab {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-color: darkslategray;
  border-style: solid;
  background: rgb(255, 255, 178);
  background: linear-gradient(90deg, rgba(255, 255, 178, 1) 0%, rgba(215, 252, 255, 1) 71%, rgba(234, 205, 255, 1) 100%);
}

.content {
  border-color: darkslategray;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
  flex-direction: column;
}

button {
  margin: 5px;
  border-color: darkslategray;
  border-style: solid;
  border-width: 2px;
  width: 30px;
  height: 30px;
  background-color: white;
  box-shadow: 1px 1px #999;
}

button:hover {
  background-color: var(--color1);
}

button:active {
  background-color: var(--color1);
  box-shadow: 0 0 #999;
}

svg {
  width: 14px;
  height: 14px;
}

.questionText {
  grid-template-rows: 1fr;
  grid-column-start: 2;
  height: auto;
}
</style>