<template>
  <div class="container marko-one">
    <section v-if="!activeVault" class="row">
      <div class="col-12">
        Loading Vault Page...
      </div>
    </section>
    <section v-else class="row justify-content-center pt-2">
      <div class="col-5">
        <img :src="activeVault.img" alt="vault cover image" class="img-fluid coverImg">
        <div class="text-center text-white position-relative vaultTitle" style="bottom: 30%">
          <p class="fs-1 fw-bold m-0">{{ activeVault.name.toUpperCase() }}</p>
          <p class="fs-4 ">by {{ activeVault.creator.name }}</p>
        </div>
        <span @click="destroyVault()" class="" role="button"><i
            class="text-end mdi mdi-delete-circle fs-2 position-relative" style="bottom: 87%; left: 93%"
            title="delete vault"></i></span>
      </div>
    </section>
  </div>
</template>


<script>
import { useRoute } from "vue-router";
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { vaultsService } from "../services/VaultsService";
import { router } from "../router";
export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      getVaultById()
      getKeepsByVaultId()
    });
    async function getVaultById() {
      try {
        const vaultId = route.params.vaultId
        await vaultsService.getVaultById(vaultId)
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }
    async function getKeepsByVaultId() {
      try {
        const vaultId = route.params.vaultId
        await vaultsService.getKeepsByVaultId(vaultId)
      } catch (error) {
        logger.error(error)
        Pop.error(error)
      }
    }
    return {
      activeVault: computed(() => AppState.activeVault),
      account: computed(() => AppState.account),
      activeVaultsKeeps: computed(() => AppState.activeVaultsKeeps),
      async destroyVault() {
        try {
          const yes = await Pop.confirm('Are you sure you would like to delete this vault?')
          if (!yes) { return }
          await vaultsService.destroyVault()
          router.push({ name: 'Home' })
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
.coverImg {
  height: 20vh;
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.vaultTitle {
  text-shadow: 0px 6px 12px black;
}
</style>