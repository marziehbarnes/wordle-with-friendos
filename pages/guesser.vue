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

const drawer = ref(null)

</script>
<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>

<template>
  <v-app id="template">
    <v-navigation-drawer v-model="drawer">
      <li><NuxtLink to="/">home</NuxtLink></li>
      <router-link to="/giver">Go to Giver</router-link>
      <li><NuxtLink to="/giver">giver</NuxtLink></li> <!-- MUTEX? LOCK? something.. -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-app-bar-title>Wordle With Friends!</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <div class="page">
        <v-card class="text-center grey d-flex flex-column align-center justify-center" height="100%" maxWidth="700", maxHeight="500">
          <onScreenKB @onKeyPress="handleInput" />
        </v-card>
      </div>
    </v-main>
  </v-app>

</template>

<style>
.template{
  background-color: grey;
}
.page{
  width: auto;
  height: 2000px;
  background-color: grey
}
.kb {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  max-width: 700px;
  min-width: 500px;
  max-height: 500px;
  min-height: 500px;

  position:relative;
  text-align: center;
  align-items: center;
  display: flex;

  flex: 1;
  justify-content: center;
  align-items: "center";
  background-color: "#ffc2c2";

}
.router-link-exact-active{
  align-items: center;
  color: rgb(27, 53, 167);
  text-decoration: none;   /* underline */
  font-weight: bold;     

  margin: 0 8px;          /* Space between each link */
  padding: 5 10px;      /* Padding around the link text */
}
</style>



