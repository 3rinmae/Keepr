import { AppState } from "../AppState"
import { Keep } from "../models/Keep"
import { Vault } from "../models/Vault"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { profilesService } from "./ProfilesService"

class VaultsService {
  async createNewVault(vaultData) {
    const res = await api.post('api/vaults', vaultData)
    // logger.log('vault created', res.data)
    if (AppState.activeProfile.id != AppState.account.id) {
      return
    }
    AppState.activeProfileVaults.push(new Vault(res.data))
    // this.getMyVaults()
    // profilesService.getProfileById(AppState.activeProfile.id)
    // profilesService.getVaultsByProfileId()
  }

  async getMyVaults() {
    const res = await api.get('account/vaults')
    logger.log('my vaults', res.data)
    AppState.myVaults = res.data.map((vault) => new Vault(vault))
    // logger.log('myvaults in appstate', AppState.myVaults)
  }

  async myVaultsIntoActiveProfileVaults() {
    AppState.activeProfileVaults = AppState.myVaults
    // logger.log('appstate activeProfileVaults = myVaults', AppState.activeProfileVaults)
  }

  async destroyVault() {
    const vaultId = AppState.activeVault.id
    const res = await api.delete(`api/vaults/${vaultId}`)
    logger.log('delete vault', res.data)
    this.getMyVaults()
  }

  async getVaultById(vaultId) {
    AppState.activeVault = null
    const res = await api.get(`api/vaults/${vaultId}`)
    logger.log('getting vault from api', res.data)
    AppState.activeVault = new Vault(res.data)
    logger.log('active vault in appstate', AppState.activeVault)
  }

  async getKeepsByVaultId(vaultId) {
    AppState.activeVaultsKeeps = null
    const res = await api.get(`api/vaults/${vaultId}/keeps`)
    logger.log('getting keeps by vault id', res.data)
    AppState.activeVaultsKeeps = res.data.map((keep) => new Keep(keep))
  }

  async clearActiveVault() {
    AppState.activeVault = null
    AppState.activeVaultsKeeps = []
  }
}

export const vaultsService = new VaultsService()