<template>
  <p class="text-3xl font-bold underline">{{ count.toFixed(2) }}</p>
  <base-input @update:model-value="handleModelUpdate" :model-value="name"/>
  <button @click="increment">click me</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import BaseInput from '@/components/BaseInput.vue';

function increment() {
  count.value++
}

function handleModelUpdate(val: string) {  
  console.log('name', name.value, 'val', val);
  name.value = val
}
let count: Ref<number> = ref(1)
let name: Ref<string> = ref('')
</script>

<style lang="scss" scoped>
button {
  background-color: revert
}
</style>