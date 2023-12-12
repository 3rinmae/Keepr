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
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      getProfileById();
      async function getProfileById() {
        try {
          const profileId = route.params.profileId
          await profilesService.getProfileById(profileId)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
    })
    return {
      activeProfile: computed(() => AppState.activeProfile),
      account: computed(() => AppState.account)
    }
  }
};
</script>


<style lang="scss" scoped></style>