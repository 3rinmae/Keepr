import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class VaultsService {
  async createNewVault(vaultData) {
    const res = await api.post('api/vaults', vaultData)
    logger.log('vault created', res.data)
  }
}

export const vaultsService = new VaultsService()