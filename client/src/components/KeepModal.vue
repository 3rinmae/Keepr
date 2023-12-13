<template>
  <div class="container-fluid bg-cream border-0 rounded-4">
    <section v-if="!activeKeep" class="row">
      <div class="col-12">
        Loading Keep...
      </div>
    </section>

    <section v-else class="row">
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
        </section>
        <section class="row w-100">
          <div class="col-12 fs-1">
            <p class="marko-one d-flex justify-content-center text-center">{{ activeKeep?.name }}</p>
          </div>
          <div>
            <p class="px-4"> {{ activeKeep?.description }}</p>
          </div>
        </section>
        <section class="row w-100 ps-3">
          <div class="col-9 p-0 d-flex">
            <div v-if="account?.id" class="d-flex">
              <button v-if="account?.id == activeVault?.creatorId" @click="removeKeepFromVault()"
                class="btn border-bottom d-flex">
                <span><i class="mdi mdi-minus-circle-outline"></i> Remove</span>
              </button>
              <form class="d-flex" @submit="addKeepToVault()">
                <select v-model="editable.vaultId" class="form-select" aria-label="Default select example">
                  <!-- <option selected>My Vaults</option> -->
                  <option v-for="vaultId in myVaults" :key="vaultId?.id" :value="vaultId?.id"><span>
                      {{ vaultId?.name }}
                    </span></option>
                </select>
                <div class="bg-plum rounded-3 ms-2">
                  <button type="submit" class="btn marko-one bg-plum">save</button>
                </div>
              </form>
            </div>
          </div>
          <div class="col-3 d-flex align-items-center justify-content-end p-0" role="button">
            <router-link :to="{ name: 'Profile', params: { profileId: activeKeep?.creatorId } }"
              v-if="activeKeep.creatorId" @click="closeKeepModal()">
              <img :src="activeKeep?.creator?.picture" alt="creator image" title="creator image link to profile"
                class="img-fluid rounded-circle creator-image">
              <span class="ps-1">{{ activeKeep?.creator?.name }}</span>
            </router-link>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { vaultKeepsService } from "../services/VaultKeepsService";
import { keepsService } from "../services/KeepsService";
import { Modal } from "bootstrap";
import { vaultsService } from "../services/VaultsService";
import { useRoute } from "vue-router";
export default {
  setup() {
    const editable = ref({});
    const route = useRoute();
    return {
      editable,
      activeKeep: computed(() => AppState.activeKeep),
      account: computed(() => AppState.account),
      myVaults: computed(() => AppState.myVaults),
      myVaultsByName: computed(() => AppState.myVaults?.name),
      activeVault: computed(() => AppState.activeVault),
      activeVaultKeep: computed(() => AppState.activeVaultKeep),
      async addKeepToVault() {
        try {
          const vaultKeepData = editable.value
          logger.log("creating vaultKeep", vaultKeepData)
          await vaultKeepsService.addKeepToVault(vaultKeepData)
          editable.value = {}
        } catch (error) {
        }
      },

      async closeKeepModal() {
        Modal.getOrCreateInstance('#keepModal').hide()
        keepsService.clearActiveKeep()
        // logger.log(AppState.activeKeep)
      },

      async removeKeepFromVault() {
        try {
          const yes = await Pop.confirm('Are you sure you would like to remove this keep from your vault?')
          if (!yes) { return }
          const activeVaultKeep = this.activeKeep.vaultKeepId
          logger.log(activeVaultKeep)
          vaultKeepsService.removeKeepFromVault(activeVaultKeep)
          const vaultId = route.params.vaultId;
          this.closeKeepModal()
          vaultsService.getVaultById(vaultId)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
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
  border-radius: 14px 0% 0% 14px;
}
</style>