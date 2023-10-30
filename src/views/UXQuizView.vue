<template>
  <section class="quiz">
    <h1 style="grid-column-start: 2;">Take the Quiz!</h1>
    <UXQuestion1 v-if="!success1" :success1="success1" @validationsuccess1="onValidationsuccess1" />
    <UXQuestion2 v-if="success1 && !success2" :success2="success2" @validationsuccess2="onValidationsuccess2" />
    <UXQuestion3 v-if="success1 && success2 && !success3" :success3="success3" @validationsuccess3="onValidationsuccess3" />
  </section>
</template>

<script>
// Komponenten importieren
import UXQuestion1 from '@/components/UXQuestion1.vue';
import UXQuestion2 from '@/components/UXQuestion2.vue';
import UXQuestion3 from '@/components/UXQuestion3.vue';


export default {
  components: {
    UXQuestion1,
    UXQuestion2,
    UXQuestion3,
  },
  data() {
    return {
      success1: false, // Initialisieren der success1-Variable
      success2: false, // Initialisieren der success2-Variable
      success3: false, // Initialisieren der success3-Variable
    };
  },
  methods: {
    onValidationsuccess1(issuccess1) {
      if (issuccess1) {
        this.success1 = true;
        console.log('Validierung 1 erfolgreich');
      } else {
        this.success1 = false;
        console.log('Validierung 1 nicht erfolgreich');
      }
    },
    onValidationsuccess2(issuccess2) {
      if (issuccess2) {
        this.success2 = true;
        console.log('Validierung 2 erfolgreich');
      } else {
        this.success2 = false;
        console.log('Validierung 2 nicht erfolgreich');
      }
    },
    onValidationsuccess3(issuccess3) {
      if (issuccess3) {
        this.success3 = true;
        console.log('Validierung 3 erfolgreich');
      } else {
        this.success3 = false;
        console.log('Validierung 3 nicht erfolgreich');
      }
    }
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