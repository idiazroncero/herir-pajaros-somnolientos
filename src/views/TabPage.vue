<script setup>
import { RouterLink } from 'vue-router'
import ResultTab from '../components/ResultTab.vue'
</script>

<template>
  <Transition appear>
    <div class="result">
      <div class="congrats">
        <h1>Felicidades</h1>
        <p>
          ¡Has logrado dormir a la criatura!<br />
          Aquí está tu creación, puedes imprimirla y utilizarla en una caja de música para dormir a
          otros seres que encuentres en tu camino.
        </p>
        <div class="links">
          <RouterLink class="btn" to="/">Volver al juego</RouterLink>
          <RouterLink class="btn" to="/">Imprimir</RouterLink>
        </div>
      </div>
      <ResultTab />
    </div>
  </Transition>
</template>

<style scoped>
.result {
  width: 90vw;
  height: 100%;
  align-self: stretch;
  margin: 0 auto;
  position: relative;
  background-color: var(--vt-c-white);
  padding: 3rem 2rem;
  border-radius: 1rem;
  color: var(--vt-c-black);
}

.btn {
  text-decoration: none;
  font-size: 0.8rem;
  border: 2px solid var(--vt-c-black);
  color: var(--vt-c-black);
  padding: 0.75rem 1rem 0.5rem 1rem;
  line-height: 1;
}

.btn:hover,
.btn:focus {
  outline: 2px solid var(--vt-c-black);
  outline-offset: 2px;
  border-color: transparent;
  color: var(--vt-c-white);
  background-color: var(--vt-c-black);
}

.btn:active {
  transform: scale(0.95);
}

.congrats {
  max-width: 860px;
  margin: 0 auto;
}

.links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 1rem auto;
}

.v-enter-active {
  transition: opacity 1s ease 0.5s;
}

.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
</style>
