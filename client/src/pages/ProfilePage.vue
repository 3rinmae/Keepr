<template>
  <div class="container">
    <section v-if="!activeProfile" class="row">
      <div class="col-12">
        Loading Profile Page...
      </div>
    </section>
    <section v-else class="row">
      active profile in appstate
    </section>

  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  setup() {
    return {
      activeProfile: computed(() => AppState.activeProfile)
    }
  }
};
</script>


<style lang="scss" scoped></style>