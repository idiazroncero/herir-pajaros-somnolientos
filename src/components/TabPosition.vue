<script setup>
import { defineProps } from 'vue'
const props = defineProps(['note', 'duration', 'isFirst', 'isLast'])

function getWidth(duration) {
  if (duration === 0) return '6rem'
  return `${(duration / 1000) * 6}rem`
}

function getHumanDuration(duration) {
  return `${duration / 1000}s`
}
</script>

<template>
  <div v-if="isFirst" class="tab tab-first">
    <div :class="`slot`"><span>C</span></div>
    <div :class="`slot`"><span>D</span></div>
    <div :class="`slot`"><span>E</span></div>
    <div :class="`slot`"><span>F</span></div>
    <div :class="`slot`"><span>G</span></div>
    <div :class="`slot`"><span>A</span></div>
    <div :class="`slot`"><span>B</span></div>
  </div>

  <div
    v-if="duration"
    :class="`tab ${isLast ? 'tab-last' : ''}`"
    :style="`flex: 0 0 ${getWidth(duration)}`"
    :data-seconds="getHumanDuration(duration)"
  >
    <div :class="`slot slot-c ${note === 'C' ? 'active' : null}`"><span></span></div>
    <div :class="`slot slot-d ${note === 'D' ? 'active' : null}`"><span></span></div>
    <div :class="`slot slot-e ${note === 'E' ? 'active' : null}`"><span></span></div>
    <div :class="`slot slot-f ${note === 'F' ? 'active' : null}`"><span></span></div>
    <div :class="`slot slot-g ${note === 'G' ? 'active' : null}`"><span></span></div>
    <div :class="`slot slot-a ${note === 'A' ? 'active' : null}`"><span></span></div>
    <div :class="`slot slot-b ${note === 'B' ? 'active' : null}`"><span></span></div>
  </div>
</template>

<style scoped>
.tab {
  display: flex;
  flex-direction: row;
  height: 3rem;
  flex: 0 0 3rem;
}

.tab-last {
  border-bottom: 12px double var(--vt-c-black);
}

.tab-last span {
  display: none;
}

.tab-first {
  height: 4rem;
  flex: 0 0 4rem;
  position: relative;
}

.tab-first::before {
  content: '';
  border-bottom: 2px solid var(--vt-c-black);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1rem;
}

.tab-first .slot span {
  display: block;
  background-color: transparent;
  height: auto;
  line-height: 3rem;
  margin-top: 2px;
  outline: none;
}

.slot {
  border-right: 3px solid var(--vt-c-black);
  width: 3rem;
  position: relative;
}

.slot:last-child {
  border-right: none;
}

.slot span {
  width: 1rem;
  height: 1rem;
  background-color: var(--vt-c-black);
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  outline: 1px solid white;
}

.slot.active span {
  display: block;
}

@media (max-width: 500px) {
  .slot {
    width: 2rem;
  }
  .tab-first {
    height: 3rem;
    flex: 0 0 3rem;
  }
  .tab-first .slot span {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  .slot span {
    width: 0.8rem;
    height: 0.8rem;
  }
}
</style>
