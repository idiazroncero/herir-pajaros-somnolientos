import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('sleep_countdown', () => {
  const steps = 11
  const sleep_countdown = ref(steps)

  function advance() {
    if (sleep_countdown.value > 0) {
      sleep_countdown.value--
    }
  }

  function back() {
    if (sleep_countdown.value < steps && sleep_countdown.value > 0) {
      sleep_countdown.value++
    }
  }

  function restart() {
    sleep_countdown.value = steps
  }

  return { sleep_countdown, advance, back, restart }
})
