<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/quiz">Quiz</router-link>
  </nav>
  <router-view />
</template>

<style>
@font-face {
  font-family: "Hepta Slab";
  src: local("Hepta Slab"),
   url(./assets/fonts/HeptaSlab-Regular.ttf) format("truetype");
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
  color: teal;
}
</style>
