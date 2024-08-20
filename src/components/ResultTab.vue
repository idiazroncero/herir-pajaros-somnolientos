<script setup>
import { ref } from 'vue'
import { useHistoryStore } from '@/stores/history'
import TabPosition from './TabPosition.vue'
const history = useHistoryStore()
const seeTab = ref(true)

function toggleTab() {
  seeTab.value = !seeTab.value
}
</script>

<template>
  <div v-if="seeTab" class="wrapper">
    <div class="scroller">
      <TabPosition
        v-for="(entry, index) in history.history"
        v-bind:key="index"
        :note="entry.note"
        :duration="entry.duration"
        :isFirst="index === 0"
        :isLast="entry.isLast"
      />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  background-color: var(--vt-c-white);
  padding: 1rem;
  border-radius: 1rem;
  color: var(--vt-c-black);
  width: 100%;
}

.scroller {
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  min-width: 100%;
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
