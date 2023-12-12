import { AppState } from "../AppState"
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
    AppState.myVaults.unshift(new Vault(res.data))
  }
}

export const vaultsService = new VaultsService()