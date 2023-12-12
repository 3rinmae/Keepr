<template>
  <div class="container-fluid bg-cream border-0 rounded-4">
    <section class="row">
      <div class="col-6 m-0 p-0">
        <img :src="activeKeep?.img" alt="keep image" :title="activeKeep?.name" class="img-fluid active-modal-img w-100">
      </div>
      <div class="col-6 py-4 d-flex flex-wrap align-content-between">
        <section class="row align-items-center justify-content-center w-100 ps-3">
          <div class="col p-0 d-flex justify-content-center align-items-center">
            <span><i class="mdi mdi-eye"></i></span>
            <span class="ps-2 pe-4 marko-one">{{ activeKeep?.views }}</span>
            <span class="marko-one border rounded border-dark px-2">k</span>
            <span class="px-2 marko-one">{{ activeKeep?.kept }}</span>
          </div>
          <!-- <div class="col-6">
          </div> -->
        </section>
        <section class="row ">
          <div class="col-12 fs-1">
            <p class="marko-one d-flex justify-content-center">{{ activeKeep?.name }}</p>
          </div>
          <div>
            <p class="px-4"> {{ activeKeep?.description }}</p>
          </div>
        </section>
        <section class="row w-100 ps-3">
          <div class="col p-0">
            <div v-if="account?.id" class="d-flex">
              <button v-if="activeKeep?.id == activeVaultKeep?.keepId" class="btn border-bottom"><i
                  class="mdi mdi-minus-circle-outline"></i>
                <span>Remove</span></button>
              <select class="form-select" aria-label="Default select example">
                <option selected>My Vaults</option>
                <option v-for="vault in myVaults" :key="vault?.id" :value="myVaults?.name"><span>
                    {{ myVaults?.name }}
                  </span></option>
              </select>
              <button class="btn marko-one bg-plum">save</button>
            </div>
          </div>
          <div class="col d-flex align-items-center justify-content-end p-0" role="button">
            <img :src="activeKeep?.creator?.picture" alt="creator image" title="creator image link to profile"
              class="img-fluid rounded-circle creator-image">
            <span class="ps-1">{{ activeKeep?.creator?.name }}</span>
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
      myVaults: computed(() => AppState.myVaults),
      myVaultsByName: computed(() => AppState.myVaults?.name),
      activeVault: computed(() => AppState.activeVault),
      activeVaultKeep: computed(() => AppState.activeVaultKeep)
    }
  }
};
</script>


<style lang="scss" scoped>
.creator-image {
  aspect-ratio: 1;
  height: 2rem;
}

.active-modal-img {
  border-radius: 3% 0% 0% 3%;
}
</style>