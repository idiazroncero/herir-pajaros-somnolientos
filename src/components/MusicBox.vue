<script setup>
import { useCounterStore } from '@/stores/counter'
import { useHistoryStore } from '@/stores/history'
import { ref } from 'vue'
import { useSound } from '@vueuse/sound'
import { useRouter } from 'vue-router'
import aFile from '../assets/sounds/a.mp3'
import bFile from '../assets/sounds/b.mp3'
import cFile from '../assets/sounds/c.mp3'
import dFile from '../assets/sounds/d.mp3'
import eFile from '../assets/sounds/e.mp3'
import fFile from '../assets/sounds/f.mp3'
import gFile from '../assets/sounds/g.mp3'

const counter = useCounterStore()
const history = useHistoryStore()
const router = useRouter()
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
const noteSettings = {
  volume: 0.4,
  interrupt: false
}

const a = useSound(aFile, noteSettings)
const b = useSound(bFile, noteSettings)
const c = useSound(cFile, noteSettings)
const d = useSound(dFile, noteSettings)
const e = useSound(eFile, noteSettings)
const f = useSound(fFile, noteSettings)
const g = useSound(gFile, noteSettings)

function PlayHandler(soundObject) {
  this.isPlaying = false
  this.play = function () {
    soundObject.play()
    this.isPlaying = true
    setTimeout(() => {
      this.isPlaying = false
    }, 400)
  }
}

const playNotes = {
  C: new PlayHandler(a),
  D: new PlayHandler(b),
  E: new PlayHandler(c),
  F: new PlayHandler(d),
  G: new PlayHandler(e),
  A: new PlayHandler(f),
  B: new PlayHandler(g)
}

function processNote(note) {
  if (history.slept) {
    return
  }

  let isLast = false
  currentNote.value = note

  // Bypass the same note repeated too quickly
  if (playNotes[note].isPlaying) {
    return
  }

  playNotes[note].play()

  if (history.shouldTriggerAdvance()) {
    counter.advance()
  }

  if (counter.sleep_countdown === 0) {
    history.slept = true
    isLast = true
  }

  history.push(note, isLast)

  if (counter.sleep_countdown === 0) {
    // TODO: make this via subscribers o similar
    router.push('/tab')
  }
}

document.addEventListener('keydown', (event) => {
  const note = notes.value[event.key.toUpperCase()]
  if (note) {
    processNote(note)
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
    <li v-for="(note, key) in notes" v-bind:key="key" :class="`${history.slept ? 'disabled' : ''}`">
      <button @click="processNote(note)">
        <img v-show="currentNote !== note" src="/notita_blanco.png" alt="Indicador" />
        <img v-show="currentNote === note" src="/notita_rojo.png" alt="Indicador" />
        {{ key }}
      </button>
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

li.disabled {
  opacity: 0.25;
}

li button {
  background: none;
  border: none;
  cursor: pointer;
  appearance: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
}

li button:active {
  scale: 0.95;
}

li img {
  width: 15px;
  height: 15px;
}
</style>
