import { AppState } from "../AppState"
import { VaultKeep } from "../models/VaultKeep"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { vaultsService } from "./VaultsService"

class VaultKeepsService {

  async addKeepToVault(vaultKeepData) {
    vaultKeepData.keepId = AppState.activeKeep.id
    logger.log(vaultKeepData)
    const res = await api.post('api/vaultkeeps', vaultKeepData)
    logger.log('vault keep created', res.data)
    AppState.vaultKeeps.unshift(new VaultKeep(res.data))
    AppState.activeKeep.kept++
  }

  async removeKeepFromVault(activeVaultKeep) {
    const res = await api.delete(`api/vaultkeeps/${activeVaultKeep}`)
    logger.log('deleted vaultkeep', res.data)
    // vaultsService.getVaultById(AppState.activeVault.vaultId)
    AppState.activeVaultsKeeps = AppState.activeVaultsKeeps.filter(keep => keep.id != activeVaultKeep)
    vaultsService.getKeepsByVaultId(AppState.activeVault.id)
  }

  // async getVaultKeeps(vaultKeepId){
  //   const res = await api.get()
  // }
}

export const vaultKeepsService = new VaultKeepsService()