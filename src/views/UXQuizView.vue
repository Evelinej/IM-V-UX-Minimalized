<template>
  <section v-if="success3 === false" class="quiz">
    <h2 style="grid-column-start: 2;">Take the Quiz!</h2>
    <UXQuestion1 v-if="!success1" :success1="success1" @validationsuccess1="onValidationsuccess1" />
    <UXQuestion2 v-if="success1 && !success2" :success2="success2" @validationsuccess2="onValidationsuccess2" />
    <UXQuestion3 v-if="success1 && success2 && !success3" :success3="success3"
      @validationsuccess3="onValidationsuccess3" />
  </section>
  <section v-else class="congrats">
    <h2>Gratuliere!</h2>
    <p>Du hast das Quiz geschafft! Und ja, bei der letzten Aufgabe konntest du 3 von 4 Icons anwählen!</p>
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
/* Farben */
:root {
  --color1: #ffffb2;
  --color2: #d7fcff;
  --color3: #eacdff;
}

.quiz {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 5px;
  grid-template-areas:
    ". . .";
}

.question {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10fr;
  grid-template-areas:
    "."
    ".";
  grid-column-start: 2;
  height: 60vh;
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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em;
}

button {
  margin: 5px;
  border-color: darkslategray;
  border-style: solid;
  border-width: 2px;
  width: 30px;
  height: 30px;
  background-color: white;
  box-shadow: 1px 1px #999;
}

button:hover {
  background-color: var(--color1);
}

button:active {
  background-color: var(--color1);
  box-shadow: 0 0 #999;
}

svg {
  width: 14px;
  height: 14px;
}

.questionText {
  grid-template-rows: 1fr;
  grid-column-start: 2;
  height: auto;
}
</style>