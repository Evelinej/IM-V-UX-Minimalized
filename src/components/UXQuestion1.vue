<template>
    <section class="question">
        <div class="tab">
            <button class="minimize" @click="minimize()">_</button>
            <button class="maximize" @click="maximize()">O</button>
            <button class="close" @click="close()">X</button>
        </div>
        <div class="content">
            <div>
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

.content p {
    font-size: 0.5em;
}



/* Styling für die Text- und Passwortfelder: Componentenspezifisch */
input[type="text"],
input[type="password"] {
    width: 100%;
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
    width: 100%;
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
</style>