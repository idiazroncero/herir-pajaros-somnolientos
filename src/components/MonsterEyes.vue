<script setup>
import { useCounterStore } from '@/stores/counter'
import { useHistoryStore } from '@/stores/history'
import { ref } from 'vue'

const counter = useCounterStore()
const history = useHistoryStore()
const variant = ref('A')
const blinking = ref(false)

setInterval(() => {
  const lastEntry = history.getLastEntry()
  if (!lastEntry) return
  const now = Date.now()
  const diff = now - lastEntry.timestamp

  if (diff > 2000) {
    counter.back()
  }
}, 100)

setInterval(() => {
  const random = Math.random()
  if (random < 0.5) {
    variant.value = variant.value === 'A' ? 'B' : 'A'
  }
}, 600)

setInterval(() => {
  const random = Math.random()
  if (random < 0.33) {
    blinking.value = !blinking.value
    setTimeout(() => {
      blinking.value = !blinking.value
    }, 150)
  }
}, 2000)
</script>

<template>
  <div class="eyes">
    <img
      v-show="!blinking"
      :src="`ojos_${counter.sleep_countdown > 11 ? 11 : counter.sleep_countdown}_${variant}.png`"
      alt="Ojo!"
    />
    <img v-show="blinking" :src="`ojos_0_A.png`" alt="Ojo!" />
  </div>
</template>

<style scoped>
.eyes {
  max-width: 500px;
  margin: 0 auto;
}

.eyes img {
  max-width: 100%;
}
</style>
