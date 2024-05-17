<template>
    <div class="bg-surface-variant rounded-lg mx-auto d-flex align-center justify-center" style="height: 64px; width: 64px;">
        {{ letter }}
    </div>
</template>

<script setup>
const props = defineProps(['letter'])

console.log(props.letter)
</script>