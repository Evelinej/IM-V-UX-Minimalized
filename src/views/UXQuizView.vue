<template>
  <section class="quiz">
    <h1 style="grid-column-start: 2;">Take the Quiz!</h1>
    <UXQuestion1 v-if="!success" :success="success" @validationSuccess="onValidationSuccess" />
  </section>
</template>

<script>
import UXQuestion1 from '@/components/UXQuestion1.vue';

export default {
  components: {
    UXQuestion1,
  },
  data() {
    return {
      success: false, // Initialisieren der success-Variable
    };
  },
  methods: {
    onValidationSuccess(isSuccess) {
      if (isSuccess) {
        this.success = true;
        console.log('Validierung erfolgreich');
      } else {
        this.success = false;
        console.log('Validierung nicht erfolgreich');
      }
    },
  },
};
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