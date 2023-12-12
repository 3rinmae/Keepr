<template>
  <nav class=" d-flex justify-content-between align-items-center bg-cream px-3 fixed-bottom mb-3">
    <div class="d-flex align-items-center">
      <router-link class=" d-flex" :to="{ name: 'Home' }" title="home">
        <div class="d-flex flex-column align-items-center ps-4">
          <img alt="logo" src="../assets/img/Keepr logo.png" height="45" />
        </div>
      </router-link>
      <div v-if="account.id" class="dropdown ps-2">
        <button class="btn dropdown-toggle bg-lavender " type="button" id="dropdownMenu2" data-bs-toggle="dropdown"
          aria-expanded="false" title="create dropdown">
          <span class="oxygen ">
            Create
          </span>
        </button>
        <ul class="dropdown-menu bg-lavender" aria-labelledby="dropdownMenu2">
          <li><button class="dropdown-item bg-lavender oxygen" type="button" title="create new keep"
              data-bs-toggle="modal" data-bs-target="#createNewKeep">new keep</button>
          </li>
          <li><button class="dropdown-item bg-lavender oxygen" type="button" title="create new vault"
              data-bs-toggle="modal" data-bs-target="#createNewVault">new vault</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="pe-4">
      <Login />
    </div>
    <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> -->
    <!-- <div class="" id="navbarText"> -->
    <!-- <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul> -->
    <!-- LOGIN COMPONENT HERE -->
    <!-- <div>
        <button class="btn text-light" @click="toggleTheme"><i class="mdi" :class="theme == 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></i></button>
      </div> -->

    <!-- </div> -->
  </nav>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';
import { AppState } from "../AppState";
export default {
  setup() {

    const theme = ref(loadState('theme') || 'light')

    onMounted(() => {
      document.documentElement.setAttribute('data-bs-theme', theme.value)
    })

    return {
      theme,
      account: computed(() => AppState.account),
      toggleTheme() {
        theme.value = theme.value == 'light' ? 'dark' : 'light'
        document.documentElement.setAttribute('data-bs-theme', theme.value)
        saveState('theme', theme.value)
      }
    }
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}

@media screen and (min-width: 450px) {
  nav {
    position: sticky;
    border-bottom: 2px solid lavender;
  }
}
</style>
