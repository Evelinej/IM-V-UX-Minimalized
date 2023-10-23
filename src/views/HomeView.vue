<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'MyComponent',
  setup() {
    const title = ref('Meine Vue.js App');
    const message = ref('Willkommen zur Composition API!');

    const formattedMessage = computed(() => {
      return message.value.toUpperCase();
    });

    function changeMessage() {
      message.value = 'Der Text wurde geändert!';
    }

    return {
      title,
      message,
      formattedMessage,
      changeMessage,
    };
  },
};
</script>