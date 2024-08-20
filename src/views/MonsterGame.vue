<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import MusicBox from '../components/MusicBox.vue'
import MonsterEyes from '../components/MonsterEyes.vue'
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<template>
  <Transition appear>
    <div class="top">
      <MusicBox class="musicbox" />
      <p class="instructions">· Duerme a la criatura ·</p>
    </div>
  </Transition>

  <!-- <div v-if="counter.sleep_countdown === 0" class="result">
    <RouterLink to="/tab">Quiero ver mi tarjeta de musicbox</RouterLink>
  </div> -->

  <Transition appear>
    <div class="bottom">
      <MonsterEyes />
    </div>
  </Transition>
</template>

<style scoped>
.top.v-enter-active {
  transition: opacity 2s ease 1.5s;
}

.bottom.v-enter-active {
  transition: opacity 0.5s ease 0.5s;
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
