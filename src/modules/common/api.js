import { api, Urls } from 'utils'

const { portalCommon } = Urls;

export function getCountries() {
    return api.get(portalCommon.getCountries)
}