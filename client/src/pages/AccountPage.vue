<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
  <div class="row">
    <form @submit.prevent="editAccount()" class="p-5">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" v-model="editable.name" class="form-control" id="name" aria-describedby="name" max="255" />
      </div>
      <div class="mb-3">
        <label for="picture" class="form-label">Picture</label>
        <input v-model="editable.picture" type="url" class="form-control" id="picture" max="255" />
      </div>
      <div class="mb-3">
        <label for="coverImg" class="form-label">Cover Image</label>
        <input v-model="editable.coverImg" type="url" class="form-control" id="coverImg" max="1000" />
      </div>
      <button type="submit" class="btn btn-primary" title="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { AppState } from '../AppState';
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { accountService } from "../services/AccountService";
export default {
  setup() {
    const editable = ref({})
    watchEffect(() => {
      logger.log("watch effect working")
      editable.value = AppState.account
    })
    return {
      editable,
      account: computed(() => AppState.account),
      async editAccount() {
        try {
          const accountData = editable.value
          logger.log("editing profile data", accountData)
          await accountService.editAccount(accountData)
        } catch (error) {
          logger.error(error)
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
