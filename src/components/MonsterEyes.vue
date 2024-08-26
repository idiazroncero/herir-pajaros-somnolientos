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

window.state = {
  blink: 0,
  change: 0,
  stay: 0,
  percentages() {
    const total = this.blink + this.change + this.stay
    return {
      total: total,
      blink: ((this.blink / total) * 100).toFixed(2) + '%',
      change: ((this.change / total) * 100).toFixed(2) + '%',
      stay: ((this.stay / total) * 100).toFixed(2) + '%'
    }
  }
}

// Move the eys and blink
setInterval(() => {
  const random = Math.random()
  if (random < 0.15) {
    blinking.value = !blinking.value
    setTimeout(() => {
      blinking.value = !blinking.value
    }, 150)
    window.state.blink++
  } else if (random > 0.575) {
    variant.value = variant.value === 'A' ? 'B' : 'A'
    window.state.change++
  } else {
    window.state.stay++
  }
}, 650)
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
  position: relative;
  max-width: 500px;
  margin: 0 auto;
}

.eyes img {
  max-width: 100%;
}

.zzz {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
}
</style>
