<template>
  <section class=" keep-card">
    <div class="">
      <span class="">{{ keepProp.name }}</span>

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

  background-size: cover;
  object-fit: contain;
  // background-size: cover;
  position: center;
  width: 100%;
  height: 100%;
  padding-top: 100%;
}
</style>