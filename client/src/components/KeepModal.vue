<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-6 m-0 p-0">
        <img :src="activeKeep?.img" alt="keep image" :title="activeKeep?.name" class="img-fluid w-100">
      </div>
      <div class="col-6 p-4 ">
        <section class="row">
          <div class="col-6 text-end">
            <span><i class="mdi mdi-eye"></i></span>
            <span class="ps-2 marko-one">{{ activeKeep?.views }}</span>
          </div>
          <div class="col-6">
            <span class="marko-one border rounded border-dark p-1">k</span>
            <span class="ps-2 marko-one">{{ activeKeep?.kept }}</span>
          </div>
        </section>
        <section class="row align-content-center">
          <div class="col-12 fs-1">
            <p class="marko-one d-flex justify-content-center">{{ activeKeep?.name }}</p>
          </div>
          <div>
            <p class="px-5"> {{ activeKeep?.description }}</p>
          </div>
        </section>
        <section class="row">
          <div class="col-6">
            <!-- {{ myVaults?.name }} -->
            <button class="btn marko-one bg-plum">save</button>
          </div>
          <div class="col-6">

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