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

<script setup>
    // submit() {
    //   // so stuff
    // }
</script> 

<template>
  <h1>Enter a 5 letter word!</h1>
   <li><NuxtLink to="/guesser">home</NuxtLink></li>
    <v-responsive
      class="mx-auto"
      max-width="344"
    >
    <!--         @keydown.enter="submit" testing submit methods
                @onButtonPress? -->
      <v-text-field
        label="Wordle Me"
        clearable
      ></v-text-field>
    </v-responsive>
</template>