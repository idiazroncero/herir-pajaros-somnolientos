<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import MusicBox from './components/MusicBox.vue'
import MonsterEyes from './components/MonsterEyes.vue'
</script>

<template>
  <div class="top">
    <MusicBox class="musicbox" />
    <p class="instructions">· Duerme a la criatura ·</p>
  </div>

  <div class="bottom">
    <MonsterEyes />
  </div>
</template>

<style scoped>
.top {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
}
.bottom {
  margin-top: auto;
}
</style>
