<template>
  <div class="">
    <div class="p-3 oxygen">
      <span class="fs-2">Add your vault</span>
      <form @submit.prevent="createNewVault()" class="pt-3">
        <div class="mb-3">
          <!-- <label for="Title" class="form-label" title="title">Title</label> -->
          <input v-model="editable.name" type="text" class="form-control" id="title" aria-describedby="title"
            placeholder="Title..." title="title input" />
        </div>
        <div class="mb-3">
          <!-- <label for="Image Url" class="form-label">Image Url</label> -->
          <input v-model="editable.img" type="text" class="form-control" id="ImageUrl" aria-describedby="Image Url"
            placeholder="Cover Image URL..." title="cover image url input" />
        </div>
        <div class="mb-3">
          <!-- <label for="Description" class="form-label">Description</label> -->
          <textarea v-model="editable.description" type="text" class="form-control" id="description"
            aria-describedby="description" title="description input" placeholder="Keep Description..." />
        </div>
        <div class="mb-3 text-end">
          <div id="emailHelp" class="form-text fs-xs">Private Vaults can only be seen by you</div>
          <input v-model="editable.isPrivate" class="form-check-input" type="checkbox" value="false"
            id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Make Vault Private?
          </label>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-dark">Create Vault</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { vaultsService } from "../services/VaultsService";
export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createNewVault() {
        try {
          const vaultData = editable.value
          logger.log('creating vault', vaultData)
          await vaultsService.createNewVault(vaultData)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>