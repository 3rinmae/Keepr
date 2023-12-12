<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-6 m-0"></div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
export default {
  setup() {
    return {
      activeKeep: computed(() => AppState.activeKeep),
      account: computed(() => AppState.account)
    }
  }
};
</script>


<style lang="scss" scoped></style>