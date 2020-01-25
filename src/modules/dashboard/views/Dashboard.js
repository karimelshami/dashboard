import React from 'react'
import Sidebar from 'modules/common/components/Sidebar'
import DataTable from 'modules/common/components/DataTable'
import Grid from '@material-ui/core/Grid'
import Header from 'modules/common/components/Header'
import Dialog from 'modules/common/components/Dialog'
import Form from 'modules/common/components/Form'
import AddIcon from '@material-ui/icons/Add'
import LocationIcon from '@material-ui/icons/Room'
import Fab from '@material-ui/core/Fab'
import { useStyles } from './Dashboard.style'
import CircularProgress from '@material-ui/core/CircularProgress'
import { constants } from 'utils'
import CustomAlert from 'modules/common/components/CustomAlert'

const { status, mapLanguageIdsToEnglishText } = constants

const Dashboard = props => {
  const {
    logout,
    onSidebarTabSelect,
    selectedItem,
    onHeaderTabSelect,
    selectedCountry,
    countryDialogState,
    handleCountryChange,
    selectCountry,
    addItem,
    formModelState,
    handleItemModelClose,
    selectedItemData,
    goToCityAreas,
    selectCity,
    handleCityChange,
    submitForm,
    cities,
    handleCityChangeInAddForm,
    openEditForm,
    formData,
    typeSubmitting,
    areaDialogState,
    setAreaDialogState,
    showLoader,
    selectedCountryLangModelArr,
    toggleCityDialogInAreaPage,
    cityId,
    closeAlert,
    showAlert,
    allRelatedSpecialitiesForMain,
    allRelatedSpecialitiesForSub,
    allMainSpecialtyData,
    toggleCityAndAreaDialogState,
    cityAndAreaDialogState,
    selectCityAndArea,
    handleCityChangeInAreaNeighboursTable,
    handleAreaChangeInAreaNeighboursTable,
    allCountries,
    deleteEntry,
    toggleConfirmationDialogState,
    confirmationDialogState,
    cancelRequest,
    confirmRequest,
    goToAreaNeighbours
  } = props

  const classes = useStyles()
  let headCells = []

  headCells = headCells.concat(
    selectedCountryLangModelArr &&
      selectedCountryLangModelArr.map(item => ({
        id: `${mapLanguageIdsToEnglishText[item]}-Name`,
        numeric: false,
        disablePadding: false,
        label: `${mapLanguageIdsToEnglishText[item]} Name`
      }))
  )
  headCells = headCells.concat(
    selectedCountryLangModelArr &&
      selectedCountryLangModelArr.map(item => ({
        id: `${mapLanguageIdsToEnglishText[item]}-Url`,
        numeric: false,
        disablePadding: false,
        label: `${mapLanguageIdsToEnglishText[item]} Url`
      }))
  )
  headCells =
    selectedItem === 'cities'
      ? headCells.concat({}, {}, {})
      : headCells.concat({}, {})

  const renderAllCountriesSelection = () => {
    return (
      <Dialog
        open={true}
        hideCloseButton={true}
        applyDashStyle={true}
        content={
          <div>
            <CircularProgress />
          </div>
        }
      />
    )
  }

  const renderCountrySelectionPage = () => {
    return (
      <Dialog
        countriesModal
        hideCloseButton
        fullScreen
        open={countryDialogState}
        content={
          <Form
            dropdownData={allCountries}
            handleDropdownChange={handleCountryChange}
            type="country"
            onSubmit={selectCountry}
          />
        }
      />
    )
  }

  const renderDashboardContent = () => {
    return (
      <div className={classes.root}>
        <Header
          selectedTab={selectedCountry}
          logout={logout}
          onHeaderTabSelect={onHeaderTabSelect}
        />
        <Grid container alignContent="center">
          <Grid item xs={2}>
            <Sidebar
              selectedItem={selectedItem}
              onSidebarTabSelect={onSidebarTabSelect}
            />
          </Grid>
          <Grid item xs={10}>
            <div className={classes.dataTableWrapper}>
              <Dialog
                open={showLoader}
                hideCloseButton={true}
                applyDashStyle={true}
                content={<CircularProgress />}
              />
              {renderDataTable()}
              {renderAddButton()}
              {selectedItem === 'areas' ||
                (selectedItem === 'area neighbours' &&
                  renderChangeLocationButton())}
            </div>
          </Grid>
        </Grid>
        {renderFormDialog()}
      </div>
    )
  }

  const renderDataTable = () => {
    return (
      <DataTable
        goToAreaNeighbours={goToAreaNeighbours}
        addItem={addItem}
        selectCity={selectCity}
        handleCityChange={handleCityChange}
        goToCityAreas={goToCityAreas}
        headCells={headCells}
        rows={selectedItemData}
        openEditForm={openEditForm}
        areaDialogState={areaDialogState}
        toggleCityDialogInAreaPage={toggleCityDialogInAreaPage}
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
      />
    )
  }
  const renderFormDialog = () => {
    return (
      <Dialog
        fullScreen
        handleClose={() => handleItemModelClose()}
        open={formModelState}
        content={
          <>
            <Form
              allRelatedSpecialitiesForMain={allRelatedSpecialitiesForMain}
              allRelatedSpecialitiesForSub={allRelatedSpecialitiesForSub}
              allMainSpecialtyData={allMainSpecialtyData}
              handleDropdownChange={handleCityChangeInAddForm}
              handleCityChangeInAreaNeighboursTable={
                handleCityChangeInAreaNeighboursTable
              }
              handleAreaChangeInAreaNeighboursTable={
                handleAreaChangeInAreaNeighboursTable
              }
              onSubmit={submitForm}
              dropdownData={
                selectedItem === 'area neighbours' ? selectedItemData : cities
              }
              type={
                selectedItem === 'areas'
                  ? 'addArea'
                  : selectedItem === 'area neighbours'
                  ? 'addAreaNeighbour'
                  : selectedItem
              }
              formData={formData}
              selectedCountryLangModelArr={selectedCountryLangModelArr}
              cityId={cityId}
            />
            <div
              className={classes.loader}
              style={{ display: `${typeSubmitting ? 'block' : 'none'}` }}
            >
              <CircularProgress />
            </div>
          </>
        }
      />
    )
  }

  const renderErrorAlert = () => {
    return (
      <CustomAlert
        open={showAlert}
        message={'Something went wrong'}
        handleClose={closeAlert}
      />
    )
  }
  const renderAddButton = () => {
    return (
      <div className={classes.addIconWrapper}>
        <Fab
          title={`Add ${selectedItem}`}
          color="primary"
          aria-label="add"
          onClick={() => addItem('add')}
        >
          <AddIcon />
        </Fab>
      </div>
    )
  }

  const renderChangeLocationButton = () => {
    return (
      <div className={classes.locationIconWrapper}>
        <Fab
          title={`Change City`}
          color="primary"
          aria-label="change"
          onClick={() => setAreaDialogState()}
        >
          <LocationIcon />
        </Fab>
      </div>
    )
  }

  return (
    <>
      {allCountries &&
      (allCountries.status === status.FETCHING ||
        allCountries.status === status.SHOULD_CALL_API)
        ? renderAllCountriesSelection()
        : !selectedCountry
        ? renderCountrySelectionPage()
        : renderDashboardContent()}
      {renderErrorAlert()}
    </>
  )
}

export default Dashboard
