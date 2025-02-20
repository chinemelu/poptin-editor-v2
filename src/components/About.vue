<template>
  <p class="text-3xl font-bold underline">{{ count.toFixed(2) }}</p>

  <button @click="increment">click me</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
function increment() {
  count.value++
}
let count = ref(1)
</script>

<style lang="scss" scoped>
button {
  background-color: revert
}
</style>