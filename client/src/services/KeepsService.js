import { AppState } from "../AppState"
import { Keep } from "../models/Keep"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class KeepsService {
  async getKeeps() {
    const res = await api.get('api/keeps')
    logger.log('get keeps', res.data)
    AppState.keeps = res.data.map((keep) => new Keep(keep))
  }
}

export const keepsService = new KeepsService()