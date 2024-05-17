<!-- 
  TODO:
  TEXTBOX
  - Textbox -> event listeners -> simple backend -> propgate to guesers
  -   RETURN TO GEUSSER POV (PROBABLY SAME APPLET CONSTRUCT/REDIRECT?)
  -  

  Few (not so fun) IDEAS: 
  - set # of guesses
  - implement harder game mode option (no reveals?)
  - prompt user for word to prevent slowpokes @@@
  - longer than 5 letter words? 

-->

<script setup lang="ts">
const { data } = await useFetch('/api/giver')
const message = ref('')
</script>

<template>
  <h1>Enter a 5 letter word!</h1>
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="wordle me" />
  <p>Result of /api/hello </p>
  <pre>{{ data }}</pre>
</template>