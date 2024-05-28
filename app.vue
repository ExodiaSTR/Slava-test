<script setup lang="ts">
import { useCounterStore } from './store/Counter';

const counter = useCounterStore()
console.log(counter.count + 1)
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
