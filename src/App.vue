<template>
  <!-- https://796765-8.web.fhgr.ch -->
  <!-- IM V | UX-Minimalized -->
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/uxquiz">UX-Quiz</router-link> |
    <router-link to="/funquiz">Fun-Quiz</router-link>
  </nav>
  <router-view />
</template>

<script setup>

// import { createApp } from 'vue'

// const app = createApp({})

// app.provide(/* key */ 'message', /* value */ 'hello!')

</script>

<style>
@font-face {
  font-family: "Hepta Slab";
  src: local("Hepta Slab"),
    url(./assets/fonts/HeptaSlab-Regular.ttf) format("truetype");
}

/* Farben */
:root {
  --color1: #ffffb2;
  --color2: #d7fcff;
  --color3: #eacdff;
}

h2 {
  grid-column-start: 2;
  font-size: 1.25em;
}

p {
  grid-column-start: 2;
  font-size: 1em;
}

#app {
  font-family: "Hepta Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: purple;
}
</style>
