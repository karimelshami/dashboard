import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { constants } from 'utils'
import { dashboardActions } from 'modules/dashboard'
import { commonActions } from 'modules/common'
import Dashboard from 'modules/dashboard/views'
import Cookies from 'js-cookie'
const { status } = constants

const DashboardContainer = () => {
  const [formModelState, setFormModelState] = useState(false)
  const [formData, setFormData] = useState({})
  const [countryDialogState, setCountryDialogState] = useState(true)
  const [cityId, setCityId] = useState('')
  const [areaId, setAreaId] = useState(0)
  const [areaDialogState, setAreaDialogState] = useState(true)
  const [cityAndAreaDialogState, setCityAndAreaDialogState] = useState(true)
  const [editFormInUse, setEditFormInUse] = useState(false)
  const [tempData, setTempData] = useState({})
  const [confirmationDialogState, setConfirmationDialogState] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    getAllCountries()
    getRelatedSpecialtiesForMainAndSub()
  }, [])

  const {
    selectedItem,
    selectedCountry,
    addType,
    selectedItemDataNew,
    cities,
    showLoader,
    showAlert,
    allRelatedSpecialitiesForMain,
    allRelatedSpecialitiesForSub,
    allMainSpecialtyData,
    allCountries
  } = useSelector(state => ({
    allCountries: state.common.allCountries.Data,
    showAlert: state.dashboard.showAlert,
    selectedItem: state.dashboard.selectedItem,
    selectedCountry: state.dashboard.selectedCountry,
    addType: state.dashboard.addType,
    selectedItemDataNew: {
      cities: state.dashboard.getCityData.data,
      areas: state.dashboard.getAreaData.data,
      insurances: state.dashboard.getInsuranceData.data,
      mainSpecialties: state.dashboard.getMainSpecialtyData.data,
      subSpecialties: state.dashboard.getSubSpecialtyData.data,
      areaNeighbours: state.dashboard.getAreaNeighboursData.data
    },
    cities: state.dashboard.getCityData.data,
    showLoader:
      state.common.allCountries.status === status.FETCHING ||
      state.dashboard.getCityData.status === status.FETCHING ||
      state.dashboard.getAreaData.status === status.FETCHING ||
      state.dashboard.getInsuranceData.status === status.FETCHING ||
      state.dashboard.getMainSpecialtyData.status === status.FETCHING ||
      state.dashboard.getSubSpecialtyData.status === status.FETCHING ||
      state.dashboard.addType.status === status.FETCHING ||
      state.dashboard.deleteType.status === status.FETCHING ||
      state.dashboard.getAreaNeighboursData.status === status.FETCHING,
    allRelatedSpecialitiesForMain:
      state.dashboard.allRelatedSpecialitiesForMain.data,
    allRelatedSpecialitiesForSub:
      state.dashboard.allRelatedSpecialitiesForSub.data,
    allMainSpecialtyData: state.dashboard.getMainSpecialtyData.data
  }))

  const selectedCountryLangModelArr =
    selectedCountry.LanguageItemModels &&
    selectedCountry.LanguageItemModels.map(item => item.LanguageId).sort()

  const getAllCountries = () => {
    dispatch(commonActions.getCountires())
  }

  const toggleConfirmationDialogState = () => {
    setConfirmationDialogState(!confirmationDialogState)
  }

  const getRelatedSpecialtiesForMainAndSub = () => {
    dispatch(dashboardActions.getRelatedSpecialitiesForMain())
    dispatch(dashboardActions.getRelatedSpecialitiesForSub())
  }

  const getMainSpecialty = countryId => {
    dispatch(dashboardActions.getMainSpecialty(countryId))
  }

  const toggleCityDialogInAreaPage = () => {
    setAreaDialogState(!areaDialogState)
    if (areaDialogState)
      getSelectedItemData('cities', selectedCountry.CountryId)
  }

  const toggleCityAndAreaDialogState = () => {
    setCityAndAreaDialogState(!cityAndAreaDialogState)
    if (cityAndAreaDialogState)
      getSelectedItemData('cities', selectedCountry.CountryId)
  }

  const openChooseAreaDialog = () => {
    if (selectedItem === 'area neighbours') {
      toggleCityAndAreaDialogState()
    } else if (selectedItem === 'areas') {
      toggleCityDialogInAreaPage()
    }
  }
  const confirmRequest = () => {
    toggleConfirmationDialogState()
    deleteRequest(tempData)
    setTempData({})
  }
  const deleteAreaNeigbour = body => {
    dispatch(dashboardActions.deleteAreaNeighbours(body))
  }

  const cancelRequest = () => {
    toggleConfirmationDialogState()
    setTempData({})
  }

  const deleteEntry = data => {
    setTempData(data)
    toggleConfirmationDialogState()
  }

  const onSidebarTabSelect = value => {
    getSelectedItemData(value, selectedCountry.CountryId)
    dispatch(dashboardActions.setSelectedItem(value))
  }

  const onHeaderTabSelect = value => {
    getSelectedItemData('cities', value.CountryId)
    dispatch(dashboardActions.setSelectedItem('cities'))
    dispatch(dashboardActions.setSelectedCountry(value))
    getMainSpecialty(value.CountryId)
  }

  const handleCountryChange = event => {
    const country = event.target.value
    getSelectedItemData(selectedItem, country.CountryId)
    dispatch(dashboardActions.setSelectedCountry(country))
    getMainSpecialty(country.CountryId)
  }

  const selectCity = () => {
    setAreaDialogState(false)
    getSelectedItemData('areas', selectedCountry.CountryId, cityId)
    dispatch(dashboardActions.setSelectedItem('areas'))
  }

  const selectCityAndArea = () => {
    setCityAndAreaDialogState(false)
    getAreaNeighbours(areaId)
  }

  const goToCityAreas = cityId => {
    setCityId(cityId)
    setAreaDialogState(false)
    getSelectedItemData('areas', selectedCountry.CountryId, cityId)
    dispatch(dashboardActions.setSelectedItem('areas'))
  }

  const goToAreaNeighbours = areaId => {
    setAreaId(areaId)
    setCityAndAreaDialogState(false)
    getSelectedItemData(
      'area neighbours',
      selectedCountry.CountryId,
      null,
      areaId
    )
    dispatch(dashboardActions.setSelectedItem('area neighbours'))
    dispatch(dashboardActions.getAreaNeighbours(areaId))
  }
  const addArea = (areaObj, cityId) => {
    dispatch(dashboardActions.addArea(areaObj, cityId))
  }
  const addAreaNeighbour = areaNeighbour =>
    dispatch(dashboardActions.addAreaNeighbours(areaNeighbour))

  const addCity = (obj, countryId) =>
    dispatch(dashboardActions.addCity(obj, countryId))

  const addInsurance = (obj, countryId) =>
    dispatch(dashboardActions.addInsurance(obj, countryId))

  const addSpeciality = (obj, countryId) =>
    dispatch(dashboardActions.addSpeciality(obj, countryId))

  const editArea = (obj, cityId) =>
    dispatch(dashboardActions.editArea(obj, cityId))

  const editCity = (obj, countryId) =>
    dispatch(dashboardActions.editCity(obj, countryId))

  const editInsurance = (obj, countryId) =>
    dispatch(dashboardActions.editInsurance(obj, countryId))

  const editSpeciality = (obj, countryId) =>
    dispatch(dashboardActions.editSpeciality(obj, countryId))

  const getArea = obj => dispatch(dashboardActions.getArea(obj))

  const getCity = countryId => {
    dispatch(dashboardActions.getCity(countryId))
  }

  const getInsurance = countryId =>
    dispatch(dashboardActions.getInsurance(countryId))

  const getAreaNeighbours = areaId =>
    dispatch(dashboardActions.getAreaNeighbours(areaId))

  const getSubSpecialty = countryId =>
    dispatch(dashboardActions.getSubSpecialty(countryId))

  const openEditForm = data => {
    setEditFormInUse(true)
    setFormData(data)
    setFormModelState(true)
  }

  const getSelectedItemData = (type, countryId, cityId, areaId) => {
    if (type === 'insurances') getInsurance(countryId)
    if (type === 'areas' && cityId) getArea(cityId)
    if (type === 'cities') getCity(countryId)
    if (type === 'sub specialities') getSubSpecialty(countryId)
    if (type === 'area neighbours') getAreaNeighbours(areaId)
  }

  const selectCountry = () => {
    setCountryDialogState(false)
    getSelectedItemData(selectedItem, selectedCountry.CountryId)
  }
  const addItem = () => setFormModelState(true)

  const handleItemModelClose = () => {
    setFormModelState(false)
    setFormData({})
    setEditFormInUse(false)
  }

  const handleCityChange = event => {
    setCityId(event.target.value)
  }

  const handleCityChangeInAreaNeighboursTable = value => getArea(value)

  const handleAreaChangeInAreaNeighboursTable = value => setAreaId(value)
  let history = useHistory()

  const constructFormBody = args => {
    let type = selectedItem
    let body = {}
    let langModelToSubmit = []
    if (type === 'areas') {
      let toEditAreaId = (formData && formData.Id) || 0,
        langModelToSubmit = selectedCountryLangModelArr.map(lang => ({
          LanguageId: lang,
          Name: args.primaryLangDepValue[`primaryLangDepId_${lang}`],
          DisplayOrder: args.tertiaryValue || '1'
        }))
      body = {
        CityId: cityId,
        Latitude: args.primaryValue,
        Longitude: args.secondaryValue,
        LanguageItemModels: langModelToSubmit,
        CategoryId: args.secondaryDdValue
      }
      if (editFormInUse) body['Id'] = toEditAreaId
      return body
    }
    if (type === 'cities') {
      let toEditCityId = (formData && formData.Id) || 0,
        langModelToSubmit = selectedCountryLangModelArr.map(lang => ({
          LanguageId: lang,
          Name: args.primaryLangDepValue[`primaryLangDepId_${lang}`],
          DisplayOrder: args.primaryValue || '1'
        }))
      body = {
        CountryId: selectedCountry.CountryId,
        LanguageItemModels: langModelToSubmit,
        IsDefault: args.primaryChkValue,
        IsDeleted: 0
      }
      if (editFormInUse) body['Id'] = toEditCityId
      return body
    }
    if (type === 'insurances') {
      let toEditInsuranceId = (formData && formData.InsuranceKey) || 0,
        langModelToSubmit = selectedCountryLangModelArr.map(lang => ({
          LanguageId: lang,
          Name: args.primaryLangDepValue[`primaryLangDepId_${lang}`],
          DisplayOrder: args.primaryValue || '1'
        }))
      body = {
        CountryId: selectedCountry.CountryId,
        LanguageItemModels: langModelToSubmit
      }
      if (editFormInUse) body['CountryInsuranceKey'] = toEditInsuranceId
      return body
    }
    if (type === 'main specialities') {
      let toEditSpecialityId = (formData && formData.SpecialityKey) || 0,
        langModelToSubmit = selectedCountryLangModelArr.map(lang => ({
          LanguageId: lang,
          Name: args.primaryLangDepValue[`primaryLangDepId_${lang}`],
          FriendlyName:
            args.secondaryLangDepValue[`secondaryLangDepId_${lang}`] || null,
          PreferredName:
            args.tertiaryLangDepValue[`tertiaryLangDepId_${lang}`] || null,
          TitleDisplayName:
            args.quaternaryLangDepValue[`quaternaryLangDepId_${lang}`] || null,
          Description:
            args.quinaryLangDepValue[`quinaryLangDepId_${lang}`] || null,
          DisplayOrder: args.primaryValue || '1'
        }))
      body = {
        CountryId: selectedCountry.CountryId,
        LanguageItemModels: langModelToSubmit
      }
      if (editFormInUse) {
        body['CountrySpecialityKey'] = toEditSpecialityId
      } else {
        body['SpecialtyKey'] = args.secondaryDdValue || null
      }
      return body
    }
    if (type === 'sub specialities') {
      let toEditSpecialityId = (formData && formData.SpecialityKey) || 0,
        langModelToSubmit = selectedCountryLangModelArr.map(lang => ({
          LanguageId: lang,
          Name: args.primaryLangDepValue[`primaryLangDepId_${lang}`],
          FriendlyName:
            args.secondaryLangDepValue[`secondaryLangDepId_${lang}`] || null,
          PreferredName:
            args.tertiaryLangDepValue[`tertiaryLangDepId_${lang}`] || null,
          TitleDisplayName:
            args.quaternaryLangDepValue[`quaternaryLangDepId_${lang}`] || null,
          Description:
            args.quinaryLangDepValue[`quinaryLangDepId_${lang}`] || null,
          DisplayOrder: args.primaryValue || '1'
        }))
      body = {
        CountryId: selectedCountry.CountryId,
        LanguageItemModels: langModelToSubmit
      }
      if (editFormInUse) {
        body['CountrySpecialityKey'] = toEditSpecialityId
      } else {
        body['SpecialtyKey'] = args.secondaryDdValue || null
        body['ParentId'] = args.tertiaryDdValue || null
      }
      return body
    }
    if (type === 'area neighbours') {
      body = {
        AreaId: areaId,
        NeighbourId: args.tertiaryDdValue,
        NeighbouringOrder: args.primaryValue
      }
      return body
    }
  }

  const deleteRequest = args => {
    let type = selectedItem
    let body = {}
    if (type === 'area neighbours') {
      body = {
        AreaNeighbourId: args.AreaNeighbourId,
        AreaId: areaId,
        NeighbourId: args.NeighbourId
      }
      deleteAreaNeigbour(body)
    }
  }

  const submitForm = args => {
    let type = selectedItem
    let countryId = selectedCountry.CountryId
    let body = constructFormBody(args)
    if (type === 'insurances') {
      if (editFormInUse) {
        editInsurance(body, countryId)
      } else {
        addInsurance(body, countryId)
      }
      clearState()
    }

    if (type === 'areas') {
      if (editFormInUse) {
        editArea(body, cityId)
      } else {
        addArea(body, cityId)
      }
      clearState()
    }
    if (type === 'cities') {
      if (editFormInUse) {
        editCity(body, countryId)
      } else {
        addCity(body, countryId)
      }
      clearState()
    }
    if (type === 'main specialities' || type === 'sub specialities') {
      if (editFormInUse) {
        editSpeciality(body, countryId)
      } else {
        addSpeciality(body, countryId)
      }
      clearState()
    }
    if (type === 'area neighbours') {
      addAreaNeighbour(body)
      clearState()
    }
  }

  const clearState = () => {
    setFormModelState(false)
    setFormData({})
    setEditFormInUse(false)
  }

  const handleCityChangeInAddForm = event => {
    let cityId = event.target.value
    setCityId(cityId)
  }

  const closeAlert = () => dispatch(dashboardActions.toggleShowAlert(false))

  const logout = () => {
    Cookies.remove('userAuth')
    history.replace('/')
  }

  return (
    <Dashboard
      allCountries={allCountries}
      selectCountry={selectCountry}
      setCountryDialogState={setCountryDialogState}
      countryDialogState={countryDialogState}
      selectedCountry={selectedCountry}
      selectedItem={selectedItem}
      onSidebarTabSelect={onSidebarTabSelect}
      logout={logout}
      onHeaderTabSelect={onHeaderTabSelect}
      handleCountryChange={handleCountryChange}
      addItem={addItem}
      formModelState={formModelState}
      handleItemModelClose={handleItemModelClose}
      selectedItemData={selectedItemDataNew}
      goToCityAreas={goToCityAreas}
      selectCity={selectCity}
      handleCityChange={handleCityChange}
      submitForm={submitForm}
      cities={cities}
      handleCityChangeInAddForm={handleCityChangeInAddForm}
      openEditForm={openEditForm}
      formData={formData}
      typeSubmitting={addType.status === status.FETCHING}
      areaDialogState={areaDialogState}
      setAreaDialogState={openChooseAreaDialog}
      showLoader={showLoader}
      selectedCountryLangModelArr={selectedCountryLangModelArr}
      cityId={cityId}
      toggleCityDialogInAreaPage={toggleCityDialogInAreaPage}
      closeAlert={closeAlert}
      showAlert={showAlert}
      allRelatedSpecialitiesForMain={allRelatedSpecialitiesForMain}
      allRelatedSpecialitiesForSub={allRelatedSpecialitiesForSub}
      allMainSpecialtyData={allMainSpecialtyData}
      cityAndAreaDialogState={cityAndAreaDialogState}
      toggleCityAndAreaDialogState={toggleCityAndAreaDialogState}
      selectCityAndArea={selectCityAndArea}
      handleCityChangeInAreaNeighboursTable={
        handleCityChangeInAreaNeighboursTable
      }
      handleAreaChangeInAreaNeighboursTable={
        handleAreaChangeInAreaNeighboursTable
      }
      deleteEntry={deleteEntry}
      toggleConfirmationDialogState={toggleConfirmationDialogState}
      confirmationDialogState={confirmationDialogState}
      cancelRequest={cancelRequest}
      confirmRequest={confirmRequest}
      goToAreaNeighbours={goToAreaNeighbours}
    />
  )
}

export default DashboardContainer
