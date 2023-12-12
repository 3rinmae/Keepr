import { AppState } from "../AppState"
import { Vault } from "../models/Vault"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class VaultsService {
  async createNewVault(vaultData) {
    const res = await api.post('api/vaults', vaultData)
    logger.log('vault created', res.data)
    AppState.vaults.unshift(new Vault(res.data))
    this.getMyVaults()
  }

  async getMyVaults() {
    const res = await api.get('account/vaults')
    logger.log('my vaults', res.data)
    AppState.myVaults = res.data.map((vault) => new Vault(vault))
  }

  async destroyVault(vaultId) {
    const res = await api.delete(`api/vaults/${vaultId}`)
    logger.log('delete vault', res.data)
    this.getMyVaults()
  }
}

export const vaultsService = new VaultsService()