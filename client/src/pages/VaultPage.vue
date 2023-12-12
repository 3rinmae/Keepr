<template>
  <div class="container">


  </div>
</template>


<script>
import { useRoute } from "vue-router";
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { vaultsService } from "../services/VaultsService";
export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      getVaultById()
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
    return {

    }
  }
};
</script>


<style lang="scss" scoped></style>