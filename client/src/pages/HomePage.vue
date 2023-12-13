<template>
  <div class="container">
    <section class="masonry-with-columns">
      <KeepCard :keepProp="keep" v-for="keep in keeps" :key="keep.id" role="button" />
    </section>
  </div>
</template>

<script>
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { keepsService } from "../services/KeepsService";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import KeepCard from "../components/KeepCard.vue";
import { Modal } from "bootstrap";
import { vaultsService } from "../services/VaultsService";

export default {
  setup(props) {
    onMounted(() => {
      getKeeps();
      clearActiveData()
    });
    async function getKeeps() {
      try {
        await keepsService.getKeeps();
        // let row = document.querySelector("[data-masonry]")
        // new Masonry(row, { percentPosition: true })
      }
      catch (error) {
        logger.error(error);
        Pop.error(error);
      }
    };
    async function clearActiveData() {
      await keepsService.clearActiveKeep()
      await vaultsService.clearActiveVault()
    }
    return {
      keeps: computed(() => AppState.keeps),
      account: computed(() => AppState.account),
      getKeeps,
    };
  },
  components: { KeepCard }
}
</script>

<style scoped lang="scss">
.masonry-with-columns {
  columns: 4 175px;
}


// .grid {
//   display: grid;
//   grid-template-rows: masonry;
//   grid-template-columns: repeat(4, 1fr 1fr);
//   // gap: 1rem;
//   counter-reset: grid;
// }

// .grid-item {
//   float: left;
//   height: min-content;
//   width: 20%;

//   box-shadow: 1px 2px 3px black;
// }

// .grid {
//   columns: 18rem;
//   gap: 1rem;
//   counter-reset: grid;
// }

// .item+.item {
//   margin-top: 1rem;
// }

// .item {
//   break-inside: avoid;
//   aspect-ratio: 4 / 3;
//   background: pink;
//   padding: 1rem;
//   border-radius: 0.75rem;
// }

// .item::before {
//   counter-increment: grid;
//   content: counter(grid);
// }

// .item:nth-child(3n) {
// aspect-ratio: 1;
// background: lavender;
// }

// .item:nth-child(3n - 1) {
// aspect-ratio: 2 / 3;
// background: lightblue;
// }


// body {
//   display: layout(masonry);
//   --padding: 20;
//   --columns: 4;
// }

// div {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 20px;
// }

// div::first-letter {
//   font-size: 200%;
// }

// .home {
//   display: grid;
//   height: 80vh;
//   place-content: center;
//   text-align: center;
//   user-select: none;

//   .home-card {
//     width: clamp(500px, 50vw, 100%);

//     >img {
//       height: 200px;
//       max-width: 200px;
//       width: 100%;
//       object-fit: contain;
//       object-position: center;
//     }
//   }
// }
</style>
