<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import MusicBox from '../components/MusicBox.vue'
import MonsterEyes from '../components/MonsterEyes.vue'
import { useCounterStore } from '@/stores/counter'
import { useSound } from '@vueuse/sound'
import { ref } from 'vue'
import winderFile from '../assets/sounds/winder.mp3'
import { useHistoryStore } from '@/stores/history'
const counter = useCounterStore()
const history = useHistoryStore()
const introFinished = ref(false)
const introStarted = ref(false)
const winder = useSound(winderFile, {
  volume: 0.4,
  interrupt: false,
  onplay: () => {
    introStarted.value = true
  },
  onend: () => {
    introFinished.value = true
    history.restart()
    counter.restart()
  }
})

function start() {
  winder.play()
}
</script>

<template>
  <button class="btn" @click="start()" v-if="!introStarted">Haz click para comenzar...</button>
  <Transition appear v-if="introFinished">
    <div class="top">
      <MusicBox class="musicbox" />
      <p class="instructions">· Duerme a la criatura ·</p>
    </div>
  </Transition>

  <!-- <div v-if="counter.sleep_countdown === 0" class="result">
    <RouterLink to="/tab">Quiero ver mi tarjeta de musicbox</RouterLink>
  </div> -->

  <Transition appear v-if="introFinished">
    <div class="bottom">
      <MonsterEyes />
    </div>
  </Transition>
</template>

<style scoped>
.top.v-enter-active {
  transition: opacity 3s ease 1.5s;
}

.bottom.v-enter-active {
  transition: opacity 0.5s ease 0s;
}

.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
}
.bottom {
  margin-top: auto;
  margin-bottom: -2rem;
}
.result {
  max-width: 90vw;
  width: 100%;
}
</style>
