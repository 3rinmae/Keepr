<template>
  <div class="container marko-one">
    <section v-if="!activeVault" class="row">
      <div class="col-12">
        Loading Vault Page...
      </div>
    </section>
    <section v-if="activeVault" class="row justify-content-center pt-2 h-75">
      <div class="col-9 col-sm-7 col-md-5 p-0">
        <img :src="activeVault.img" alt="vault cover image" class="img-fluid coverImg p-0 ">
        <div class="text-center text-white position-relative vaultTitle" style="bottom: 33%">
          <p class="fs-1 fw-bold m-0">{{ activeVault.name.toUpperCase() }}</p>
          <p class="fs-4 ">by {{ activeVault.creator.name }}</p>
        </div>
        <span v-if="account.id == activeVault.creatorId" @click="destroyVault()" class="vaultTitle text-white"
          role="button"><i class="text-end mdi mdi-delete-circle fs-2 position-relative" style="bottom: 87%; left: 90%"
            title="delete vault"></i></span>
      </div>
    </section>
    <section v-if="activeVault" class="row justify-content-center">
      <div class="col-10 text-center">
        <div class="">
          <span class="bg-lavender p-2 fs-4 rounded-4">{{ activeVaultsKeeps?.length }} Keeps</span>
        </div>
      </div>
      <div class="col-10 pt-5">
        <section class="masonry-with-columns">
          <KeepCard :keepProp="keep" v-for="keep in activeVaultsKeeps" :key="keep.id" role="button" />
        </section>
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
import KeepCard from "../components/KeepCard.vue";
export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      getVaultById();
      getKeepsByVaultId();
    });
    async function getVaultById() {
      try {
        const vaultId = route.params.vaultId;
        await vaultsService.getVaultById(vaultId);
      }
      catch (error) {
        logger.error(error);
        Pop.error(error);
        if (error.response.data.includes('Invalid Id')) {
          router.push({ name: 'Home' })
        }
      }
    }
    async function getKeepsByVaultId() {
      try {
        const vaultId = route.params.vaultId;
        await vaultsService.getKeepsByVaultId(vaultId);
      }
      catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    }
    return {
      activeVault: computed(() => AppState.activeVault),
      account: computed(() => AppState.account),
      activeVaultsKeeps: computed(() => AppState.activeVaultsKeeps),
      activeVaultsKeepsLength: computed(() => AppState.activeVaultsKeeps.length),
      async destroyVault() {
        try {
          const yes = await Pop.confirm('Are you sure you would like to delete this vault?');
          if (!yes) {
            return;
          }
          await vaultsService.destroyVault();
          router.push({ name: 'Home' });
        }
        catch (error) {
          logger.error(error);
          Pop.error(error);
        }
      }
    };
  },
  components: { KeepCard }
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

.masonry-with-columns {
  columns: 4 175px;
}
</style>