<template>
    <section class="questionText">
        <h4>2222 Du erhälst diese Meldung. Wie kannst du das Problem beheben?</h4>
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
                <p>___</p>
            </div>
            <div class="answers">
                <button class="answer" @click="answer1">Den IT-Support kontaktieren.</button>
                <button class="answer" @click="answer2">Das Dokument nicht öffnen und nach Hause gehen.</button>
                <button class="answer" @click="toggleVariable">"_old" von der Dateiendung entfernen.</button>
                <button class="answer" @click="answer4">Lie down. Try not to cry. Cry a lot.</button>
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
    emit('variableChanged2', myVariable);
};
//// Emit handling ENDE ////


// Funktionen
function answer1() {
    alert("Hast du die Einleitung nicht gelesen? Du willst den Support umgehen!");
}

function answer2() {
    alert("Das ist keine Lösung. Du musst das Problem lösen.")
}

function answer3() {
    alert("Korrekt!")
}

function answer4() {
    window.open("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f425284e-d4ad-4c30-9dbe-a1694ef71335/d5t596e-52e3e707-88df-44c8-96e1-0f992162f877.jpg/v1/fill/w_1024,h_525,q_75,strp/lie_down__try_not_to_cry__cry_a_lot_combo_by_badflippy_d5t596e-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTI1IiwicGF0aCI6IlwvZlwvZjQyNTI4NGUtZDRhZC00YzMwLTlkYmUtYTE2OTRlZjcxMzM1XC9kNXQ1OTZlLTUyZTNlNzA3LTg4ZGYtNDRjOC05NmUxLTBmOTkyMTYyZjg3Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4pRgICi7a0v4hHIFvV3u_9ayLGGuVb5R1YOlf_mabQQ");
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
    alert("Der einfache Weg bringt dich noch immer nicht ans Ziel. Versuch doch stattdessen die Aufgabe zu lösen.");
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