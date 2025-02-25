<template>
    <input 
        @input="handleInput"
        v-bind="$attrs"
        :value="modelValue"
    />
</template>

<script setup lang="ts">
    const props = defineProps({
        modelValue: {
            type: String,
            required: true
        }
    })

    const emit = defineEmits([ 'update:modelValue' ])

    defineOptions({
        inheritAttrs: false
    })

    function handleInput(event: Event) {    
        if (event.target) {   
            emit('update:modelValue', (event.target as HTMLInputElement).value)
        }
        
    }


</script>

<style scoped>

</style>