<script setup>
import onScreenKB from "~/components/onScreenKB.vue";

const handleInput = (key) => {
  console.log(key);
};
</script>

<template>
  <!-- <div>
    <h2>Wordle-with-friends!!</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis tenetur nulla, alias itaque ea consequatur iste totam enim laudantium provident sapiente beatae praesentium consequuntur saepe repudiandae cupiditate temporibus illo dolorem.</p>
  
  </div> -->

  <div class="flex flex-col h-screen max-w-md mx-auto justify-evenly">
    <onScreenKB @onKeyPress="handleInput" />
  </div>
</template>

<style scoped>
  h1{
    margin: 40px;
    font-size: 50;
  }
  p{
    margin: 20;
  }
</style>



