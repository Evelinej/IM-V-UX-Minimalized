<template>
  <section class="introduction">
    <h1>UX-Minimalized</h1><br>
    <h2>Wie wenig ist zu wenig?</h2>
    <p>Kannst du alle Aufgabenstellungen lösen, trotz minimalem Feedback?</p>
    <button class="start" @click="$router.push({ path: '/uxquiz' })">Los geht's!</button><br><br>
    <h2>First Level Support</h2>
    <p>Oder willst du den First-Level-Support umgehen, mach den Test!</p>
    <p>(Viele der Meldungen sind vom GitHub Copilot geschrieben worden. Viel Spass xD)</p>
    <button class="start" @click="$router.push({ path: '/funquiz' })">Los geht's!</button><br><br>
  </section>
  <section class="author">
  <p>Das ist das IM V Projekt von Eveline Junod, mmp21cv</p>
</section>
</template>

<script setup>


</script>

<style>
button.start {
    margin: 5px;
    border-color: darkslategray;
    border-style: solid;
    border-width: 2px;
    width: auto;
    height: 30px;
    background-color: white;
    box-shadow: 1px 1px #999;
    font-family: "Hepta Slab", serif;
}

button.start:hover {
    background-color: var(--color1);
}

button.start:active {
    background-color: var(--color1);
    box-shadow: 0 0 #999;
}


</style>