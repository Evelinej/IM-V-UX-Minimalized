
# IM V | UX-Minimalized

Für meine Bachelorarbeit wollte ich etwas mit UX machen. Stand geht das Thema jetzt in Richtung Dark Patterns, daher habe ich auf halbem Weg des Projekts mehr Spass hineingebracht, was das ganze aber weniger seriös macht. Man kann nun zwei verschiedene Quiz spielen auf der Seite. Eines ist etwas ernster, das Zweite eher lustiger Natur.

[Hier gehts zum Quiz!](https://796765-8.web.fhgr.ch/)

## Technologien

Ich habe mit dem Framework vue.js gearbeitet und mich mehr mit der compositon api von vue3 beschäftigt um mich da besser zurecht zu finden. Hier auf GitHub sind auch die vue-Arbeitsdateien einzusehen. Ich habe also mit HTML, CSS und JavaScript gearbeitet.

## Hürden

Kein Projekt geht vorüber ohne Schwierigkeiten. Da hatte ich primär in zwei verschiedenen Gebieten Probleme.

### Emits
Grösseres Kopfzerbrechen haben mir die Emits bereitet. So wie ich die Page aufbauen wollte, war es unerlässlich Werte vom Child- zum Parent-Component zu übergeben. In meinem Fall ein Bool-Wert. Das erste Quiz übergibt diesen Wert noch anders als das Fun-Quiz. Da habe ich es noch nicht geschafft diese Emits mit der composition api abzurufen, daher dort der wilde Mix. Im zweiten Quiz habe ich es dann geschafft mit einem Eventlistener den Emit abzufangen:

``` javaScript
// Child
<scipt setup>
const emit = defineEmits();
let myVariable = false;

const toggleVariable = () => {
    myVariable = !myVariable;
    emit('variableChanged', myVariable);
};
</script>



// Parent
<template>
<Component @variableChanged="handleVariableChange" />
</template>

<script setup>
const emits = ['variableChanged'];
const variable = ref(false);

const handleVariableChange1 = (value) => {
  variable.value = value;
};
</script>

```

### Responsive Design
CSS, mein Feind. Würde ich nicht so planlos meine Designs versuchen umzusetzen, wäre es wahrscheinlich auch einfacher... Ich habe Desktop-first gearbeitet und erst im Nachhinein die mobile Varianten erstellt. Die Motivation hielt sich da schon in Grenzen und ist daher nicht optimal umgesetzt. Ich müsste noch mehr Arbeit in das CSS stecken um ein besseres Ergebnis zu erhalten.

## Arbeitsmittel
### Dokus und Foren
[vue.js Dokumentation](https://vuejs.org/guide/introduction.html)

[Stack Overflow](https://stackoverflow.com/)

### AI
[GitHub Copilot](https://github.com/features/copilot)

[chatGPT](https://openai.com/chatgpt)

[Google Bard](https://bard.google.com/)