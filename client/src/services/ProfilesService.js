import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
class ProfilesService {
  async getProfileById(profileId) {
    // AppState.activeProfile = null
    const res = await api.get(`api/profiles/${profileId}`)
    logger.log('getting profile from api', res.data)
    AppState.activeProfile = new Profile(res.data)
  }

  async test() {
    const res = await api
  }
}

export const profilesService = new ProfilesService()