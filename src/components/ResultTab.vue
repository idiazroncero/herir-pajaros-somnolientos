<script setup>
import { ref } from 'vue'
import { useHistoryStore } from '@/stores/history'
import TabPosition from './TabPosition.vue'
const history = useHistoryStore()
const seeTab = ref(false)

function toggleTab() {
  seeTab.value = !seeTab.value
}
</script>

<template>
  <button @click="toggleTab()">Hermana click aqui y ya me cuentas que tal</button>
  <div v-if="seeTab" class="wrapper">
    <TabPosition
      v-for="(entry, index) in history.history"
      v-bind:key="index"
      :note="entry.note"
      :duration="entry.duration"
      :isFirst="index === 0"
    />
  </div>
</template>

<style scoped>
.wrapper {
  background-color: var(--vt-c-white);
  padding: 1rem;
  border-radius: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  color: var(--vt-c-black);
  display: flex;
  flex-wrap: wrap;
}

button {
  border: none;
  background-color: var(--vt-c-white);
  color: var(--vt-c-black);
  padding: 1rem;
  font-size: 1.5rem;
  font-family: inherit;
  margin: 1rem 0;
}
</style>
