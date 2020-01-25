import Cookies from 'js-cookie'
import { api, Urls } from 'utils'

const { portalDashboard } = Urls
const userKey = Cookies.get('userAuth')

export function deleteAreaNeigbour(body) {
  const headers = {
    Authorization: userKey
  }
  return api.post(portalDashboard.deleteAreaNeigbour, body, headers)
}

export function addAreaByCityId(body) {
  const headers = {
    Authorization: userKey
  }
  return api.post(portalDashboard.addAreaByCityId, body, headers)
}

export function addCityByCountryId(body) {
  const headers = {
    Authorization: userKey
  }
  return api.post(portalDashboard.addCityByCountryId, body, headers)
}

export function addInsuranceByCountryId(body) {
  const headers = {
    Authorization: userKey
  }
  return api.post(portalDashboard.addInsuranceByCountryId, body, headers)
}

export function addSpecialityByCountryId(body) {
  const headers = {
    Authorization: userKey
  }
  return api.post(portalDashboard.addSpecialityByCountryId, body, headers)
}

export function addAreaNeighbour(body) {
  const headers = {
    Authorization: userKey
  }
  return api.post(portalDashboard.addAreaNeighbour, body, headers)
}

export function editCityByCountryId(body) {
  const headers = {
    Authorization: userKey
  }
  return api.post(portalDashboard.editCityByCountryId, body, headers)
}

export function editAreaByCityId(body) {
  const headers = {
    Authorization: userKey
  }
  return api.post(portalDashboard.editAreaByCityId, body, headers)
}

export function editInsuranceByCountryId(body) {
  const headers = {
    Authorization: userKey
  }
  return api.post(portalDashboard.editInsuranceByCountryId, body, headers)
}

export function editSpecialityByCountryId(body) {
  const headers = {
    Authorization: userKey
  }
  return api.post(portalDashboard.editSpecialityByCountryId, body, headers)
}

export function getAreasByCityId(cityId, languageId) {
  const data = { cityId, languageId }
  return api.get(portalDashboard.getAreasByCityId, data)
}

export function getCitiesByCountryId(countryId, languageId) {
  const data = { countryId, languageId }
  return api.get(portalDashboard.getCitiesByCountryId, data)
}

export function getInsurancesByCountryId(countryId, languageId) {
  const headers = {}
  const data = { countryId, languageId }
  return api.get(portalDashboard.getInsurancesByCountryId, data, headers)
}

export function getMainSpecialtiesByCountryId(countryId) {
  const data = { countryId }
  return api.get(portalDashboard.getMainSpecialtiesByCountryId, data)
}

export function getSubSpecialtiesByCountryId(countryId) {
  const data = { countryId }
  return api.get(portalDashboard.getSubSpecialtiesByCountryId, data)
}

export function getRelatedSpecialtiesForMain() {
  return api.get(portalDashboard.getRelatedSpecialtiesForMain)
}

export function getRelatedSpecialtiesForSub() {
  return api.get(portalDashboard.getRelatedSpecialtiesForSub)
}

export function getAreaNeighbours(areaId) {
  const data = { areaId }
  return api.get(portalDashboard.getAreaNeighbours, data)
}
