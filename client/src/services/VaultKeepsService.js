import { AppState } from "../AppState"
import { VaultKeep } from "../models/VaultKeep"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class VaultKeepsService {

  async addKeepToVault(vaultKeepData) {
    vaultKeepData.keepId = AppState.activeKeep.id
    logger.log(vaultKeepData)
    const res = await api.post('api/vaultkeeps', vaultKeepData)
    logger.log('vault keep created', res.data)
    AppState.vaultKeeps.unshift(new VaultKeep(res.data))
    AppState.activeKeep.kept++
  }

  // async getVaultKeeps(vaultKeepId){
  //   const res = await api.get()
  // }
}

export const vaultKeepsService = new VaultKeepsService()