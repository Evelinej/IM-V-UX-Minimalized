<template>
  <div class="quiz">
    <h1>Das ist die Quiz-Seite</h1>
    <p>{{ title }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Frage 1',
  setup() {
    const title = ref('Frage 1');


    return {
      title
    };
  },
};
</script>