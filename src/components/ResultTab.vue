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
  </div>
</template>

<style scoped>
.wrapper {
  background-color: var(--vt-c-white);
  padding: 3rem 2rem;
  border-radius: 1rem;
  color: var(--vt-c-black);
  width: 100%;
  height: 100%;
}

.scroller {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  padding: 1rem;
}

.card {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2rem 1rem;
  border-radius: 0.75rem;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
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
