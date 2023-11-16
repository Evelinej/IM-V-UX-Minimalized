<template>
    <section class="questionText">
        <h4>Du bekommst folgende Fehlermeldung wenn du document.docx öffnen willst. Wie Löst du das Problem?</h4>
    </section>
    <section class="question">
        <div class="tab">
            <button class="minimize" @click="minimize()">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 35 35">
                    <g id="Gruppe_4" data-name="Gruppe 4" transform="translate(-114 -52)">
                        <line id="Linie_5" data-name="Linie 5" x2="25.638" transform="translate(121.181 83.337)" fill="none"
                            stroke="#2f4f4f" stroke-width="5" />
                    </g>
                </svg>
            </button>
            <button class="maximize" @click="maximize()">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 35 35">
                    <g id="Gruppe_2" data-name="Gruppe 2" transform="translate(-189 -52)">
                        <g id="Rechteck_4" data-name="Rechteck 4" transform="translate(194 58)" fill="#fff" stroke="#2f4f4f"
                            stroke-width="1">
                            <rect x="1" y="1" width="28" height="25" fill="none" />
                        </g>
                        <rect id="Rechteck_5" data-name="Rechteck 5" width="30" height="6" transform="translate(194 58)"
                            fill="#2f4f4f" />
                    </g>
                </svg>
            </button>
            <button class="close" @click="close()">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 35 35">
                    <g id="Gruppe_3" data-name="Gruppe 3" transform="translate(-261 -52)">
                        <line id="Linie_1" data-name="Linie 1" x2="24.276" y2="24.674" transform="translate(268.862 59.663)"
                            fill="none" stroke="#2f4f4f" stroke-width="2" />
                        <line id="Linie_2" data-name="Linie 2" x2="24.276" y2="24.674"
                            transform="translate(293.337 59.862) rotate(90)" fill="none" stroke="#2f4f4f"
                            stroke-width="2" />
                    </g>
                </svg>
            </button>
        </div>
        <div class="content">

            <!-- <button @click="toggleVariable">Toggle Variable</button> -->
            <div class="warning">
                <p>Safari kann die Datei nicht öffnen.</p>
            </div>
            <div class="answers">
                <button class="answer" @click="answer1">Nicht den Safari-Browser benutzen.</button>
                <button class="answer" @click="toggleVariable">Die Datei in der dazugehörigen Software öffnen.</button>
                <button class="answer" @click="answer3">Den IT-Support kontaktieren.</button>
                <button class="answer" @click="answer4">Das Problem mal kurz googeln.</button>
            </div>
        </div>
    </section>
</template>

<script setup>
// Funktionalität importieren
import { defineProps, defineEmits } from 'vue';


//// Emit handling ////
// Variablen
const emit = defineEmits();
let myVariable = false;

// Funktionen
const toggleVariable = () => {
    answer2();
    myVariable = !myVariable;
    emit('variableChanged3', myVariable);
};
//// Emit handling ENDE ////


// Funktionen

//  Antwortfunktionen
function answer1() {
    alert("Obwohl ich Grundsätzlich dafür bin... Das ist nicht die richtige Antwort.");
}

function answer2() {
    alert("Korrekt! War nicht so schwer, oder?")
}

function answer3() {
    window.open('https://media.tenor.com/orjl_U5GnH4AAAAC/it-crowd-hello-it.gif'); // Du weisst, die Definition von Wahnsinn ist, immer wieder das Gleiche zu tun und andere Ergebnisse zu erwarten...
}

function answer4() {
    alert("Das ist immer ein toller Ansatz! Aber es gibt eine treffendere Antwort.")
}



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
    alert("Der einfache Weg bringt dich nicht immer ans Ziel. Versuch doch stattdessen die Aufgabe zu lösen.");
}



</script>

<style scoped>
.warning {
    border-style: solid;
    border-color: darkslategray;
    padding: 2em;
    /* background: linear-gradient(90deg, rgba(255, 255, 178, 1) 0%, rgba(215, 252, 255, 1) 71%, rgba(234, 205, 255, 1) 100%); */
    background-color: var(--color3);
    margin: 1em;
}

.answer {
    width: auto;
    height: 50px;
    font-family: "Hepta Slab", serif;
}
</style>