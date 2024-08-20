import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useHistoryStore = defineStore('history', () => {
  const history = ref([])
  const slept = ref(false)

  function push(note, isLast) {
    const duration = getDuration()
    const currentLength = history.value.length
    const pushOptions = {
      note: note,
      timestamp: Date.now(),
      duration: 500, // This is a default until the duration is actually set. It maps to 3rem.
      isLast
    }
    history.value.push(pushOptions)

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

  return { history, slept, push, getLastEntry, shouldTriggerAdvance, close }
})
