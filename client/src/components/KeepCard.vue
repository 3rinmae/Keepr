<template>
  <section @click="setActiveKeep()" class="position-relative mb-3 marko-one text-white keep-card " v-show="show">
    <img :src="keepProp.img" alt="" class="img-fluid" @load="ready">
    <div v-if="account.id == keepProp.creatorId" class="position-absolute" style="top: -18px; right: -18px"
      title="delete keep">
      <button @click.stop="destroyKeep()" class="btn text-danger">
        <i class="mdi mdi-close-circle "></i>
      </button>
    </div>
    <div class="position-absolute w-100" style="bottom: 0;">
      <div class="h-100">
        <div class="d-flex justify-content-between align-items-center py-2 px-1 keep-card-text h-100">
          <span class="fs-5">{{ keepProp.name }}</span>
          <img class=" creator-image rounded-circle" :src="keepProp.creator.picture" alt="creator image"
            :title="keepProp.creator.name">
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="loader" v-show="!show"></section> -->
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { Keep } from "../models/Keep";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { keepsService } from "../services/KeepsService";
import { Modal } from "bootstrap";
import { vaultsService } from "../services/VaultsService";
export default {
  props: { keepProp: { type: Keep, required: true } },
  setup(props) {

    const show = ref(false)

    return {
      show,
      props,
      keepImg: computed(() => `url(${props.keepProp.img})`),
      account: computed(() => AppState.account),
      ready() {
        show.value = true
      },
      async destroyKeep() {
        try {
          const yes = await Pop.confirm('Are you sure you would like to delete this keep?')
          if (!yes) {
            return
          }
          await keepsService.destroyKeep(props.keepProp.id)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      },
      setActiveKeep() {
        AppState.activeKeep = props.keepProp
        logger.log('setting active card', props.keepProp)
        keepsService.getKeepById(props.keepProp.id)
        vaultsService.getMyVaults()
        logger.log('appstate my vaults', AppState.myVaults)
        Modal.getOrCreateInstance('#keepModal').show()
        logger.log('appstate active keep', AppState.activeKeep)
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.keep-card {
  box-shadow: 0px 7px 10px #0000009e;
  width: 100%;
}

// .loader {
//   height: 30vh;
//   background-color: #4949498b;
// }

.keep-card-text {
  box-shadow:
    0px -10px 20px 4px #4949498b;
  // 0 0 2rem .5rem #4949498b inset;
  background: #4949498b;

}

.creator-image {
  aspect-ratio: 1;
  height: 2rem;
}


// body {
//   background-size: 100%;
// }
</style>