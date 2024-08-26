<script setup>
import { ref } from 'vue'
import { useHistoryStore } from '@/stores/history'
import TabPosition from './TabPosition.vue'
const history = useHistoryStore()
</script>

<template>
  <div class="scroller">
    <div class="card">
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
.scroller {
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  z-index: 1;
  padding-top: 1rem;
}

.card {
  margin-bottom: 15vh;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: var(--vt-c-black);
  padding: 2rem 1rem;
  border-radius: 0.75rem;
  box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.2);
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
