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

  async increaseViewCount(keep) {
    // this.getKeepById(keep.id)
    AppState.activeKeep.views++
  }

  async getKeepById(keepId) {
    // AppState.activeKeep = {}
    const res = await api.get(`api/keeps/${keepId}`)
    logger.log('getting keep by id', res.data)
    AppState.activeKeep = res.data
  }

  async createNewKeep(keepData) {
    const res = await api.post('api/keeps', keepData)
    // logger.log('keep created', res.data)
    AppState.keeps.unshift(new Keep(res.data))
  }

  async destroyKeep(keepId) {
    const res = await api.delete(`api/keeps/${keepId}`)
    // logger.log('keep deleted', res.data)
    this.getKeeps()
  }

  async clearActiveKeep() {
    AppState.activeKeep = null
  }
}

export const keepsService = new KeepsService()