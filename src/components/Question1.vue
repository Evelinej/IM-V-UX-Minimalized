<template>
    <section class="question">
        <div class="tab">
            <button class="minimize" @click="click()">_</button>
            <button class="maximize" @click="click()">O</button>
            <button class="close" @click="click()">X</button>
        </div>
        <div class="content"></div>
    </section>
</template>

<script setup>

function click() {
    console.log("click");
}

</script>

<style>
:root {
    --color1: #ffffb2;
    --color2: #d7fcff;
    --color3: #eacdff;
}

.question {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 8fr;
    grid-template-areas:
        "."
        ".";
    grid-column-start: 2;
    height: 400px;
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
}

button {
    margin: 5px;
    border-color: darkslategray;
    border-style: solid;
    border-width: 2px;
    width: 30px;
    height: 30px;
}

.content {}
</style>