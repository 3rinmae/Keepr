<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-6 m-0 p-0">
        <img :src="activeKeep?.img" alt="keep image" :title="activeKeep?.name" class="img-fluid w-100">
      </div>
      <div class="col-6">
        <section class="row">
          <div class="col">
            <span><i class="mdi mdi-eye"></i></span>
            <span>{{ activeKeep?.views }}</span>
          </div>
        </section>
      </div>
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
      account: computed(() => AppState.account),
      myVaults: computed(() => AppState.myVaults)
    }
  }
};
</script>


<style lang="scss" scoped></style>