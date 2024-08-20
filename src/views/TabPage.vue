<script setup>
import { RouterLink } from 'vue-router'
import ResultTab from '../components/ResultTab.vue'
</script>

<template>
  <Transition appear>
    <div class="result">
      <ResultTab />
      <RouterLink class="back" to="/">Volver al juego</RouterLink>
    </div>
  </Transition>
</template>

<style scoped>
.result {
  width: 90vw;
  height: 100%;
  align-self: stretch;
  margin: 0 auto;
  position: relative;
}

.back {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.v-enter-active {
  transition: opacity 1s ease 0.5s;
}

.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
</style>
