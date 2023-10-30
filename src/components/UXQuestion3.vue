<template>
    <section class="question">
        <div class="tab">
            <button class="minimize" @click="minimize()">_</button>
            <button class="maximize" @click="maximize()">O</button>
            <button class="close" @click="close()">X</button>
        </div>
        <div class="content">
            <h2>Komponente 3</h2>
        </div>
    </section>
</template>

<script setup>
// Funktionalität importieren
import { defineProps, defineEmits } from 'vue';

// Props und Emits definieren
const { success3 } = defineProps(['success3']);

const emits = defineEmits(['validationsuccess3']);

// prüft die Eingaben

//     if (adviceNumber.style.color === "green" && adviceLetter.style.color === "green" && adviceCapitalLetter.style.color === "green" && adviceStar.style.color === "green") {
//         emits('validationsuccess3', true); // Löse das Ereignis aus, um den Erfolg der Validierung zurückzugeben
//     }

// Fenster minimieren
function minimize() {
    alert("Leider habe ich keine Funktion eingebaut, die das Fenster minimiert. Versuch doch stattdessen die Aufgabe zu lösen.");
}

// Fenster maximieren
function maximize() {
    alert("Leider habe ich keine Funktion eingebaut, die das Fenster maximiert. Sorry :P");
}

// Fenster schliessen
function close() {
    window.open("https://i.pinimg.com/736x/1b/b5/0f/1bb50f6255e0456c41682811e14d7d8f.jpg", "_self");
}



</script>

<style>
/* Farben */
:root {
    --color1: #ffffb2;
    --color2: #d7fcff;
    --color3: #eacdff;
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
</style>