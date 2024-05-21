<!---TODO:
link giver and guesser pages but manual for now
-->
<script setup>
import onScreenKB from "~/components/onScreenKB.vue";

const state = reactive({
  giverWord: "apple", //manual
  attempts: ["","","","","",""], //# of guesses = null values in array
  currGuess: 0,
});


onMounted(()=>{ //keyboard inputs checking for delete/enter/filter default probably not the best way to do this but idk
  window.addEventListener("keyup", (e) => {
    e.preventDefault();
    let key = 
        e.keyCode == 13
        ? "{enter)"
        : e.keyCode == 8
        ? "{bksp}"
        :String.fromCharCode(e.keyCode).toLowerCase();
      handleInput(key);
  });
});

const handleInput = (key) => { //handle on screen KB inputs (for now just logging to browser console)
  console.log("key",key);
};

</script>

<template>
  
  <div class="kb">
    <onScreenKB @onKeyPress="handleInput" />
  </div>
</template>

<style>
.kb {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  position:relative;
  max-width: 700px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;

}
</style>



