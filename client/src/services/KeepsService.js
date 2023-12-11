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

  async createNewKeep(keepData) {
    const res = await api.post('api/keeps', keepData)
    logger.log('keep created', res.data)
    AppState.keeps.push(new Keep(res.data))
  }

  async destroyKeep(keepId) {
    const res = await api.delete(`api/keeps/${keepId}`)
    logger.log('keep deleted', res.data)
    this.getKeeps()
  }
}

export const keepsService = new KeepsService()