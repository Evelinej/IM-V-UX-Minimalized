<template>
    <h2>Frage 1</h2>
    <p>Du möchtest dich auf dieser Seite anmelden. Was machst du um dich anzumelden?</p>
    <section class="question">
        <div class="tab">
            <button class="minimize" @click="minimize()">_</button>
            <button class="maximize" @click="maximize()">O</button>
            <button class="close" @click="close()">X</button>
        </div>
        <div class="content">
            <div>
                <input id="name" type="text" value="Dominic Musterperson"><br>
                <input id="password" type="password" value="1234" @keyup.enter="validateAnswer"> <button id="togglePW"
                    @click="togglePassword()">👁</button><br>
                <p style="color: green;" id="adviceNumber">Zahl</p>
                <p style="color: red;" id="adviceLetter">Kleinbuchstaben.</p>
                <p style="color: red;" id="adviceCapitalLetter">Grossbuchstaben</p>
                <button id="signUp" @click="validateAnswer()">Go</button>
            </div>
        </div>
    </section>
</template>

<script setup>

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

    const adviceNumber = document.getElementById("adviceNumber");
    const adviceLetter = document.getElementById("adviceLetter");
    const adviceCapitalLetter = document.getElementById("adviceCapitalLetter");

    adviceNumber.style.color = hasNumber ? "green" : "red";
    adviceLetter.style.color = hasLetter ? "green" : "red";
    adviceCapitalLetter.style.color = hasCapitalLetter ? "green" : "red";

    console.log('correct');
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
</style>