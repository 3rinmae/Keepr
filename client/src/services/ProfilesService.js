import { api } from "./AxiosService"
import { logger } from "../utils/Logger"
import { AppState } from "../AppState"
import { Profile } from "../models/Profile"
import { Keep } from "../models/Keep"
import { Vault } from "../models/Vault"
class ProfilesService {
  async getProfileById(profileId) {
    AppState.activeProfile = null
    const res = await api.get(`api/profiles/${profileId}`)
    // logger.log('getting profile from api', res.data)
    AppState.activeProfile = new Profile(res.data)
  }

  async getKeepsByProfileId(profileId) {
    AppState.activeProfileKeeps = null
    const res = await api.get(`api/profiles/${profileId}/keeps`)
    logger.log('getting keeps by profile id', res.data)
    AppState.activeProfileKeeps = res.data.map((keep) => new Keep(keep))
    // logger.log('keeps in Appstate', AppState.activeProfileKeeps)
  }

  async getVaultsByProfileId(profileId) {
    const res = await api.get(`api/profiles/${profileId}/vaults`)
    // logger.log('getting vaults by profile id', res.data)
    AppState.activeProfileVaults = res.data.map((vault) => new Vault(vault))
    // logger.log('vaults in appstate', AppState.activeProfileVaults)
  }
}

export const profilesService = new ProfilesService()