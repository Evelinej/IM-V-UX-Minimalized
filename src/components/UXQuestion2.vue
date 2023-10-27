<template>
    <section class="question">
        <div class="tab">
            <button class="minimize" @click="minimize()">_</button>
            <button class="maximize" @click="maximize()">O</button>
            <button class="close" @click="close()">X</button>
        </div>
        <div class="content">
            <h2>Komponente 2</h2>
        </div>
    </section>
</template>

<script setup>
// Funktionalität importieren
import { defineProps, defineEmits } from 'vue';

// Props und Emits definieren
const { success2 } = defineProps(['success2']);

const emits = defineEmits(['validationsuccess2']);

// prüft die Eingaben

//     if (adviceNumber.style.color === "green" && adviceLetter.style.color === "green" && adviceCapitalLetter.style.color === "green" && adviceStar.style.color === "green") {
//         emits('validationsuccess2', true); // Löse das Ereignis aus, um den Erfolg der Validierung zurückzugeben
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
    alert("Du versuchst den einfachen Weg zu gehen. Das bringt dich jedoch nicht ans Ziel.");
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