import { constants } from 'utils'

const { status } = constants

export const commonInitialState = {
  allCountries: {
    status: status.SHOULD_CALL_API
  }
}

export const dashboardInitialState = {
  selectedItem: "cities",
  selectedCountry: "",
  allCountries: {
    status: status.SHOULD_CALL_API
  },
  allRelatedSpecialitiesForMain: {
    status: status.SHOULD_CALL_API
  },
  allRelatedSpecialitiesForSub: {
    status: status.SHOULD_CALL_API
  },
  showAlert: false,
  addType: {
    status: status.SHOULD_CALL_API
  },
  editType: {
    status: status.SHOULD_CALL_API
  },
  deleteType: {
    status: status.SHOULD_CALL_API
  },
  getAreaData: {
    status: status.SHOULD_CALL_API
  },
  getCityData: {
    status: status.SHOULD_CALL_API
  },
  getInsuranceData: {
    status: status.SHOULD_CALL_API
  },
  getMainSpecialtyData: {
    status: status.SHOULD_CALL_API
  },
  getSubSpecialtyData: {
    status: status.SHOULD_CALL_API
  },
  getAreaNeighboursData: {
    status: status.SHOULD_CALL_API
  },
};

export const loginInitialState = {
  userInfo: {
    status: status.SHOULD_CALL_API
  }
}
