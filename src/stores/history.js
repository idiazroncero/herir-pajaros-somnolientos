import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', () => {
  const history = ref([])

  function push(note) {
    const duration = getDuration()
    const currentLength = history.value.length
    history.value.push({
      note: note,
      timestamp: Date.now()
    })
    // Retroactively update the previous note.
    const previousNote = history.value[currentLength - 1]
    if (previousNote) {
      previousNote.duration = duration
    }
  }

  function close() {
    const lastNote = getLastEntry()
    lastNote.duration = 0
  }

  function getDuration() {
    const previousEntry = getLastEntry()
    if (!previousEntry) return 0
    return Date.now() - previousEntry.timestamp
  }

  function getLastEntry() {
    return history.value[history.value.length - 1]
  }

  function shouldTriggerAdvance() {
    return history.value.length % 5 === 0
  }

  return { history, push, getLastEntry, shouldTriggerAdvance, close }
})
