import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('sleep_countdown', () => {
  const sleep_countdown = ref(11)

  function advance() {
    if (sleep_countdown.value > 0) {
      sleep_countdown.value--
    }
  }

  function back() {
    if (sleep_countdown.value < 25 && sleep_countdown.value > 0) {
      sleep_countdown.value++
    }
  }

  return { sleep_countdown, advance, back }
})
