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
  align-self: stretch;
  margin: 0 auto;
}

.btn:hover,
.btn:focus {
  outline: 2px solid var(--vt-c-black);
}

.congrats {
  align-self: stretch;
  margin: var(--var-spacing-block) var(--var-spacing-inline) 0;
  position: relative;
  padding: 6vh 3vw;
  color: var(--vt-c-black);
  position: sticky;
  top: var(--app-spacing-block);
  z-index: 1;
}

.congrats::before {
  content: '';
  position: fixed;
  inset: var(--app-spacing-block) var(--app-spacing-inline);
  background-color: var(--vt-c-white);
  border-radius: 1rem;
  z-index: -1;
}

h1,
p {
  max-width: 680px;
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
    font-size: 1.2rem;
  }
}

.links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin: 1rem auto;
  position: relative;
}

@media (min-width: 500px) {
  .links {
    flex-direction: row;
    gap: 2rem;
  }
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
