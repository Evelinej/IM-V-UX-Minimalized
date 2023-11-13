<template>
    <section class="questionText">
        <h4>Du möchtest zur nächsten Frage navigieren.</h4>
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
            <nav class="navigation">
                <ul>
                    <li><a @click="wrongAnswer1">IM V | UX-Minimalized</a></li>
                    <li><a @click="wrongAnswer4">UX-Quiz</a>
                        <ul>
                            <li><a @click="wrongAnswer2">←</a></li>
                            <li><a @click="setTrue">→</a></li>
                            <li><a @click="wrongAnswer3">⇒</a></li>
                        </ul>
                    </li>
                    <li><a @click="wrongAnswer4">Fun-Quiz</a>
                        <ul>
                            <li><a @click="wrongAnswer2">Frage 1</a></li>
                            <li><a @click="wrongAnswer2">Frage 2</a></li>
                            <li><a @click="wrongAnswer2">Frage 3</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div>
                <h2>Ich bin der Titel einer Website</h2>
                <p><a @click="wrongAnswer3">Hier ist der Inhalt der Seite.</a></p>
            </div>
        </div>
    </section>
</template>

<script setup>
// Funktionalität importieren
import { defineProps, defineEmits } from 'vue';

// Props und Emits definieren
const { success2 } = defineProps(['success2']);

const emits = defineEmits(['validationsuccess2']);

// Funktion für falsche Antwort 1
function wrongAnswer1() {
    alert("Leider falsch.");
}

// Funktion für falsche Antwort 2
function wrongAnswer2() {
    alert("... nicht richtig.");
}

// Funktion für falsche Antwort 3
function wrongAnswer3() {
    alert("nope.");
}

// Funktion für falsche Antwort mit kleinem Screen
function wrongAnswer4() {
    if (window.matchMedia("(max-width: 768px)").matches) {
    } if (window.matchMedia("(max-width: 400px)").matches) {
    }
    else {
        alert("Leider falsch.");
    }
}

function setTrue() {
    emits('validationsuccess2', true);
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
a {
    cursor: pointer;
}

nav ul {
    list-style: none;
    padding: 0;
    justify-content: space-around;
}

nav ul li {
    display: inline-block;
    position: relative;
    flex: 1;
}

nav ul li a {
    text-decoration: none;
    padding: 10px 20px;
    display: block;
}

nav ul ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1; 
    width: 100%; 
}

nav ul li:hover>ul {
    display: block;
}

nav ul ul li {
    display: block;
    width: 73.5%;
}

/* Stil für Hauptpunkte */
nav ul li a {
    background-color: #333;
    color: #fff;
}

/* Stil für Unterpunkte */
nav ul ul li a {
    background-color: #555;
    color: #fff;
    width: 100%;
}

.content {
    flex-flow: column;
}

@media only screen and (max-width: 768px) {
    nav ul {
        flex-direction: column;
        /* Ändern Sie die Ausrichtung für kleine Bildschirme */
    }

    nav ul li {
        width: 100%;
        /* Volle Breite für Hauptpunkte auf kleinen Bildschirmen */
    }
}
</style>