<template>
  <div class="container">
    <section v-if="!activeProfile" class="row">
      <div class="col-12">
        Loading Profile Page...
      </div>
    </section>
    <section v-else class="row justify-content-center pt-5 ">
      <div class="col-9">
        <img :src="activeProfile.coverImg" alt="profile cover image" class="img-fluid coverImg">
      </div>
      <div class="col-12 d-flex justify-content-center">
        <!-- position-absolute -->
        <section class="row justify-content-center " style="bottom:26%;">
          <div class="col-12 d-flex justify-content-center">
            <img :src="activeProfile.picture" alt="profile picture" :title="activeProfile.Name"
              class="img-fluid rounded-circle profileImg">
          </div>
          <span class="text-center profileName oxygen pt-1 col-12">
            {{ activeProfile.name }}
          </span>
          <div class="col-12 d-flex justify-content-center oxygen fs-4">
            <span class="">
              {{ activeProfileVaults.length }} Vaults
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
    <section class="row pt-3 justify-content-center">
      <div class="col-10">
        <span class="oxygen sectionTitles">Vaults</span>
      </div>
      <div class="col-10">
        <section class="row">
          <div v-for="vault in activeProfileVaults" :key="vault.id" role="button" class="col-3 ">
            <img :src="vault.img" alt="vault image" :title="vault.name" class="img-fluid vaultCard">
            <span class="p-2 quando text-white keep-card-text position-relative" style="bottom: 21%">{{ vault.name
            }}</span>
          </div>
        </section>
      </div>
    </section>
    <section class="row pt-3 justify-content-center">
      <div class="col-10">
        <span class="oxygen sectionTitles">Keeps</span>
      </div>
      <div class="col-10">

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
          AppState.activeProfileVaults = []
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
      activeProfileVaults: computed(() => AppState.activeProfileVaults),
      activeProfileVaultsLength: computed(() => AppState.activeProfileVaults.length)
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

.sectionTitles {
  font-size: 3.3rem;
  font-weight: bold;
}

.vaultCard {
  height: 15dvh;
  object-fit: cover;
  width: 100%;
  image-rendering: smooth;
  box-shadow: 0px 7px 10px #0000009e;
}

.keep-card-text {
  box-shadow:
    0px -10px 20px 4px #4949498b;
  // 0 0 2rem .5rem #4949498b inset;
  background: #4949498b;
  width: 100%;
  display: inline-flex;
}
</style>