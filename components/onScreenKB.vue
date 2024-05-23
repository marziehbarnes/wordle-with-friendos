<script setup>
    import Keyboard from 'simple-keyboard';
    import 'simple-keyboard/build/css/index.css';
    import  {ref, onMounted, reactive} from "vue";

    const emit = defineEmits(["onKeyPress"]); //list for possible thrown objects, only care about on key press handle natural keyboard inputs elsewhere
    const kb = ref(null); //init keyboard default obj

    const onKeyPress = (button) => {
        emit("onKeyPress", button)
    };

    onMounted(() => { //kb layout defaults 
        kb.value = new Keyboard("my-simple-keyboard", {
            layout: {
                default: [
                    "q w e r t y u i o p",
                    "a s d f g h j k l",
                    "send_it z x c v b n m Del", 
                ],
            },
            onKeyPress: onKeyPress,
        });
    });

</script>

<template>
    <div class="my-simple-keyboard">
        
    </div>
</template>

<style>

</style>