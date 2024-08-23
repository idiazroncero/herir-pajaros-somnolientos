<script setup>
import { RouterLink } from 'vue-router'
import ResultTab from '../components/ResultTab.vue'
</script>

<template>
  <Transition appear>
    <div class="result">
      <div class="congrats">
        <h1>¡Felicidades!</h1>
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
  width: 100%;
  height: 80vh;
  min-height: 450px;
  align-self: stretch;
  margin: 0 auto;
  position: relative;
  background-color: var(--vt-c-white);
  padding: 6vh 3vw;
  border-radius: 1rem;
  color: var(--vt-c-black);
}

.btn:hover,
.btn:focus {
  outline: 2px solid var(--vt-c-black);
}

.congrats {
  max-width: 860px;
  margin: 0 auto;
}

h1 {
  font-size: 2rem;
}

p {
  font-size: 0.85rem;
}
@media (min-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  p {
    font-size: 1rem;
  }
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
