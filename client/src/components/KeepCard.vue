<template>
  <section class="position-relative my-3" v-show="show">
    <img :src="keepProp.img" alt="" class="img-fluid" @load="ready">
    <div class="position-absolute w-100" style="bottom: 0;">
      <div v-if="account.id == keepProp.creatorId" class=" d-flex justify-content-end">
        <button @click="destroyKeep()" class="btn text-danger">
          <i class="mdi mdi-close-circle "></i>
        </button>
      </div>
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
export default {
  props: { keepProp: { type: Keep, required: true } },
  setup(props) {

    const show = ref(false)

    return {
      show,
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
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.keep-card {
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.619);
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