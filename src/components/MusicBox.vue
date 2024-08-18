<script setup>
import { useCounterStore } from '@/stores/counter'
import { useHistoryStore } from '@/stores/history'
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import aFile from '../assets/sounds/a.mp3'
import bFile from '../assets/sounds/b.mp3'
import cFile from '../assets/sounds/c.mp3'
import dFile from '../assets/sounds/d.mp3'
import eFile from '../assets/sounds/e.mp3'
import fFile from '../assets/sounds/f.mp3'
import gFile from '../assets/sounds/g.mp3'

const counter = useCounterStore()
const history = useHistoryStore()
const notes = ref({
  Q: 'C',
  W: 'D',
  E: 'E',
  R: 'F',
  T: 'G',
  Y: 'A',
  U: 'B'
})
const currentNote = ref(null)
const a = useSound(aFile)
const b = useSound(bFile)
const c = useSound(cFile)
const d = useSound(dFile)
const e = useSound(eFile)
const f = useSound(fFile)
const g = useSound(gFile)

const playNotes = {
  C: a,
  D: b,
  E: c,
  F: d,
  G: e,
  A: f,
  B: g
}

document.addEventListener('keydown', (event) => {
  const note = notes.value[event.key.toUpperCase()]
  if (note) {
    currentNote.value = note
    playNotes[note].play()
    history.push(note)

    if (history.shouldTriggerAdvance()) {
      counter.advance()
    }
  }
})
document.addEventListener('keyup', () => {
  setTimeout(() => {
    currentNote.value = null
  }, 300)
})
</script>

<template>
  <ul>
    <li v-for="(note, key) in notes" v-bind:key="key">
      <img v-show="currentNote !== note" src="/notita_blanco.png" alt="Indicador" />
      <img v-show="currentNote === note" src="/notita_rojo.png" alt="Indicador" />
      {{ key }}
    </li>
  </ul>
</template>

<style scoped>
ul {
  padding: 0;
  margin: 0 auto;
  list-style: none;
  display: flex;
}

li {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

li img {
  width: 15px;
  height: 15px;
}
</style>
