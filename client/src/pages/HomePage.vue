<template>
  <div class="">

  </div>
</template>

<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";

export default {
  setup() {
    // onMounted(() => {
    //   getKeeps();
    // });
    // async function getKeeps() {
    //   try {

    //   } catch (error) {
    //     logger.error(error)
    //     Pop.error(error)
    //   }
    // }
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: clamp(500px, 50vw, 100%);

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
