import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', () => {
  const history = ref([])

  function push(note) {
    history.value.push({
      note: note,
      timestamp: Date.now()
    })
  }

  function getLastEntry() {
    return history.value[history.value.length - 1]
  }

  function shouldTriggerAdvance() {
    return history.value.length % 3 === 0
  }

  return { history, push, getLastEntry, shouldTriggerAdvance }
})
