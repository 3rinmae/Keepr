<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="">
  </footer>

  <div class="modal fade" id="createNewKeep" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-body p-0">
          <NewKeepModal />
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="createNewVault" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-md">
      <div class="modal-content">
        <div class="modal-body p-0">
          <NewVaultModal />
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="keepModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0 rounded-4">
        <div class="modal-body p-0">
          <KeepModal />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import NewKeepModal from "./components/NewKeepModal.vue"
import KeepModal from "./components/KeepModal.vue"
import NewVaultModal from "./components/NewVaultModal.vue"

export default {
  setup() {
    // const myModalEl = document.getElementById('keepModal')
    // myModalEl.addEventListener('hidden.bs.modal', event => { AppState.activeKeep = {} })
    return {
      appState: computed(() => AppState),
      activeKeep: computed(() => AppState.activeKeep),
    }
  },
  components: { Navbar, NewKeepModal, KeepModal, NewVaultModal }
}
</script>
<style lang="scss">
body {
  background-color: #fef6f1
}

.bg-cream {
  background-color: #fef6f1
}

.bg-lavender {
  background-color: #dfd7ea
}

.bg-plum {
  background-color: #877a90;
}

.inter {
  font-family: 'Inter', sans-serif;
}

.marko-one {
  font-family: 'Marko One', serif;
}

.oxygen {
  font-family: 'Oxygen', sans-serif;
}

.quando {
  font-family: 'Quando', serif;
}

@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
