<template>
  <div class="p-3 oxygen">
    <span class="fs-2">Add your keep</span>
    <form @submit.prevent="createNewKeep()" class="pt-3">
      <div class="mb-3">
        <!-- <label for="Title" class="form-label" title="title">Title</label> -->
        <input v-model="editable.name" type="text" class="form-control" id="title" aria-describedby="title"
          placeholder="Title..." title="title input" />
      </div>
      <div class="mb-3">
        <!-- <label for="Image Url" class="form-label">Image Url</label> -->
        <input v-model="editable.img" type="text" class="form-control" id="ImageUrl" aria-describedby="Image Url"
          placeholder="Image URL..." title="image url input" />
      </div>
      <div class="mb-3">
        <!-- <label for="Description" class="form-label">Description</label> -->
        <textarea v-model="editable.description" type="text" class="form-control" id="description"
          aria-describedby="description" title="description input" placeholder="Keep Description..." />
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-dark">Create</button>
      </div>
    </form>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted, ref } from 'vue';
import { Modal } from "bootstrap";
import { logger } from "../utils/Logger";
import { keepsService } from "../services/KeepsService";
import Pop from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";

export default {
  setup() {
    const editable = ref({})
    return {
      editable,
      async createNewKeep() {
        try {
          const keepData = editable.value
          logger.log("creating keep", keepData)
          await keepsService.createNewKeep(keepData)
          Modal.getOrCreateInstance('#createNewKeep').hide()
          editable.value = {}
          keepsService.getKeeps()
          if (AppState.activeProfile) {
            profilesService.getKeepsByProfileId(AppState.activeProfile.id)
          }
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