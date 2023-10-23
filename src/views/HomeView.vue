<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const title = ref('Meine Vue.js App');
    const message = ref('Willkommen zur Composition API!');


    return {
      title,
      message
    };
  },
};
</script>