<script setup>
import { useCounterStore } from '@/stores/counter'
import { useHistoryStore } from '@/stores/history'
import { ref } from 'vue'

const counter = useCounterStore()
const history = useHistoryStore()
const variant = ref('A')

setInterval(() => {
  const lastEntry = history.getLastEntry()
  if (!lastEntry) return
  const now = Date.now()
  const diff = now - lastEntry.timestamp

  if (diff > 1000) {
    console.log("I'm going back!")
    counter.back()
  }
}, 600)

setInterval(() => {
  const random = Math.random()
  if (random < 0.5) {
    variant.value = variant.value === 'A' ? 'B' : 'A'
  }
}, 600)
</script>

<template>
  <img
    :src="`ojos_${counter.sleep_countdown > 11 ? 11 : counter.sleep_countdown}_${variant}.png`"
    alt="Ojo!"
  />
</template>

<style scoped></style>
