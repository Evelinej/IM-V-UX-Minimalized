<template>
    <section class="questionText">
        <h4>Du möchtest dich hier registrieren. Fülle die Felder korrekt aus um das zu erreichen.</h4>
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
            <div id="signUpBlock">
                <input id="name" type="text" value="Dominic Musterperson"><br>
                <div class="password-container">
                    <input id="password" type="password" value="1234" @keyup.enter="validateAnswer">
                    <button id="togglePW" @click="togglePassword()">👁</button>
                </div>
                <p style="color: green;" id="adviceNumber">Zahl</p>
                <p style="color: red;" id="adviceLetter">Kleinbuchstaben.</p>
                <p style="color: red;" id="adviceCapitalLetter">Grossbuchstaben</p>
                <p style="color: red;" id="adviceStar">Sternchen *</p>
                <button id="signUp" @click="validateAnswer()">Sign Up</button>
            </div>
        </div>
    </section>
</template>

<script setup>
// Funktionalität importieren
import { defineProps, defineEmits } from 'vue';

// Props und Emits definieren
const { success1 } = defineProps(['success1']);

const emits = defineEmits(['validationsuccess1']);

// zeigt das Passwort an oder versteckt es
function togglePassword() {
    if (document.getElementById("password").type === 'password') {
        document.getElementById("password").type = 'text';
    } else {
        document.getElementById("password").type = 'password';
    }
}

// prüft die Eingaben
function validateAnswer() {
    let password = document.getElementById("password").value;
    let hasNumber = /\d/.test(password);
    let hasLetter = /[a-z]/.test(password);
    let hasCapitalLetter = /[A-Z]/.test(password);
    let hasStar = /\*/.test(password);

    const adviceNumber = document.getElementById("adviceNumber");
    const adviceLetter = document.getElementById("adviceLetter");
    const adviceCapitalLetter = document.getElementById("adviceCapitalLetter");
    const adviceStar = document.getElementById("adviceStar");

    adviceNumber.style.color = hasNumber ? "green" : "red";
    adviceLetter.style.color = hasLetter ? "green" : "red";
    adviceCapitalLetter.style.color = hasCapitalLetter ? "green" : "red";
    adviceStar.style.color = hasStar ? "green" : "red";

    if (adviceNumber.style.color === "green" && adviceLetter.style.color === "green" && adviceCapitalLetter.style.color === "green" && adviceStar.style.color === "green") {
        emits('validationsuccess1', true); // Löse das Ereignis aus, um den Erfolg der Validierung zurückzugeben
    }

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
    alert("Du versuchst den einfachen Weg zu gehen. Das bringt dich jedoch nicht ans Ziel.");
}



</script>

<style scooped>
.content p {
    font-size: 0.5em;
}



/* Styling für die Text- und Passwortfelder: Componentenspezifisch */
input {
    width: 90%;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* Styling für den "togglePW" Button */
#togglePW {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

/* Styling für die Beratungstexte */
#adviceNumber,
#adviceLetter,
#adviceCapitalLetter,
#adviceStar {
    font-size: 0.5em;
    margin: 5px 0;
    text-align: left;
}

/* Styling für den "signUp" Button */
#signUp {
    background-color: var(--color2);
    color: darkslategray;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 95%;
}

.password-container {
    display: flex;
    align-items: center;
}

#password {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex: 1;
}

#togglePW {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    box-shadow: none;
    padding: 0;
    margin: 0;
    text-align: end;
}

#togglePW:hover {
    color: darkslategray;
}

#signUpBlock {
    width: auto;

}
</style>