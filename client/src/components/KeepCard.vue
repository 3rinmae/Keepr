<template>
  <section class=" keep-card">
    <div class="d-flex justify-content-between align-items-center py-2 px-1 keep-card-text">
      <span class="fs-5">{{ keepProp.name }}</span>
      <img class=" creator-image rounded-circle" :src="keepProp.creator.picture" alt="creator image"
        :title="keepProp.creator.name">
    </div>
  </section>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Keep } from "../models/Keep";
export default {
  props: { keepProp: { type: Keep, required: true } },
  setup(props) {
    return {
      keepImg: computed(() => `url(${props.keepProp.img})`)
    }
  }
};
</script>


<style lang="scss" scoped>
.keep-card {
  background-image: v-bind(keepImg);
  background-size: contain;
  object-fit: contain;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.619);
  background-repeat: no-repeat;
  width: 100%;
  // min-width: 25dvw;
  height: min-content;
  // aspect-ratio: 1;
  // min-width: 100%;
  // height: 100%;
  // position: relative;
  padding-top: 100%;
  // background-position: center;
  // display: flex;
}

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