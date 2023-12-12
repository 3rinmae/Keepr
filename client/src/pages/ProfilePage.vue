<template>
  <div class="container">
    <section v-if="!activeProfile" class="row">
      <div class="col-12">
        Loading Profile Page...
      </div>
    </section>
    <section v-else class="row justify-content-center pt-5 position-relative">
      <div class="col-9">
        <img :src="activeProfile.coverImg" alt="profile cover image" class="img-fluid coverImg">
      </div>
      <div class="col-12 d-flex justify-content-center">
        <section class="row justify-content-center position-absolute" style="bottom:-45%;">
          <div class="col-12 d-flex justify-content-center">
            <img :src="activeProfile.picture" alt="profile picture" :title="activeProfile.Name"
              class="img-fluid rounded-circle profileImg">
          </div>
          <span class="text-center profileName oxygen pt-1 col-12">
            {{ activeProfile.name }}
          </span>
          <div class="col-12 d-flex justify-content-center oxygen fs-4">
            <span class="">
              # of vaults
            </span>
            <span class="px-2">|</span>
            <span>
              {{ activeProfileKeeps.length }} Keeps
            </span>
          </div>
        </section>
        <section class="row">
        </section>
      </div>
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
import { accountService } from "../services/AccountService";
import { vaultsService } from "../services/VaultsService";
export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      getProfileById();
      getKeepsByProfileId();
      getVaultsByProfileId();
      async function getProfileById() {
        try {
          const profileId = route.params.profileId
          await profilesService.getProfileById(profileId)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
      async function getKeepsByProfileId() {
        try {
          const profileId = route.params.profileId
          await profilesService.getKeepsByProfileId(profileId)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
      async function getVaultsByProfileId() {
        try {
          const profileId = route.params.profileId
          if (profileId == AppState.account.id) {
            await vaultsService.getMyVaults(profileId)
            await vaultsService.myVaultsIntoActiveProfileVaults()
            return
          }
          await profilesService.getVaultsByProfileId(profileId)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
    })
    return {
      activeProfile: computed(() => AppState.activeProfile),
      account: computed(() => AppState.account),
      activeProfileKeeps: computed(() => AppState.activeProfileKeeps),
      activeProfileVaults: computed(() => AppState.activeProfileVaults)
    }
  }
};
</script>


<style lang="scss" scoped>
.coverImg {
  height: 40vh;
  object-fit: cover;
  width: 100%;
  border-radius: 8px;
}

.profileImg {
  height: 15vh;
  aspect-ratio: 1;
  // width: 10vw;
  border: 1px solid white;
  box-shadow: 0px 4px 7px rgb(85, 85, 85);
}

.profileName {
  font-size: 4rem;
  font-weight: bold;
}
</style>