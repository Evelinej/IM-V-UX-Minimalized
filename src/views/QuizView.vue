<template>
  <section class="quiz">

    <h1 style="grid-column-start: 2;">Das ist die Quiz-Seite</h1>
    <p style="grid-column-start: 2;">{{ title }}</p>
    <Question1 />

  </section>
</template>

<script setup>
import Question1 from '@/components/Question1.vue';


let title = 'Frage 1';

</script>

<style>
.quiz {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 5px;
  grid-template-areas:
    ". . .";
}
</style>
```