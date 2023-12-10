<template>
  <section class="row keep-card">
    <div class="col">
      <p>{{ keepProp.name }}</p>

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
  // object-fit: cover;
  // background-size: cover;
  position: center;
  width: 20dvw;
  height: 100%;
}
</style>