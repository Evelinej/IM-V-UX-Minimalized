<template>
    <section class="questionText">
        <h4>Du arbeitest an einer Datei und willst sie nun abspeichern. Was musst du tun, wenn diese Fehlermeldung auftritt?</h4>
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
            <div class="warning">
                <p>Der Dateiname "MySaleryIn%!.txt" ist nicht korrekt.</p>
                <p>Folgende Zeichen dürfen nicht verwendet werden: /()%*!?</p>
            </div>
            <div class="answers">
                <button class="answer" @click="answer1">Die Kündigung einreichen.</button>
                <button class="answer" @click="answer2">Die Zeichen /()%*!? aus dem Dateinamen entfernen.</button>
                <button class="answer" @click="toggleVariable">Das Prozentzeichen aus dem Dateinamen entfernen.</button>
                <button class="answer" @click="answer4">Den IT-Support kontaktieren.</button>
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
    answer3();
    myVariable = !myVariable;
    emit('variableChanged4', myVariable);
};
//// Emit handling ENDE ////


// Funktionen

//  Antwortfunktionen
function answer1() {
    alert("Wenn du das ernst meinst, dann solltest du dir wirklich einen anderen Job suchen...")
}

function answer2() {
    alert("Die Zeichen /()*? sind nicht in deinem Dateinamen. Sieh dir die Antworten nochmals an.")
}

function answer3() {
    alert("Korrekt!")
}

function answer4() {
    alert("Du weisst, die Definition von Wahnsinn ist, immer wieder das Gleiche zu tun und andere Ergebnisse zu erwarten...")
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
    background-color: var(--color2);
    margin: 1em;
}

.answer {
    width: auto;
    height: 50px;
    font-family: "Hepta Slab", serif;
}
</style>