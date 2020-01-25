import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Delete from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'
import AreasIcon from '@material-ui/icons/LocationCity'
import Dialog from 'modules/common/components/Dialog'
import { useSelector } from 'react-redux'
import { useStyles } from './DataTable.style'
import Form from 'modules/common/components/Form'
import State from 'modules/common/components/State'
import NoResult from 'assets/empty-data.png'
import NoOneHere from 'assets/no-one.gif'
import ConfirmationForm from 'modules/common/components/ConfirmationForm'
const DataTable = props => {
  const {
    headCells,
    rows,
    goToCityAreas,
    selectCity,
    handleCityChange,
    openEditForm,
    areaDialogState,
    toggleCityDialogInAreaPage,
    toggleCityAndAreaDialogState,
    cityAndAreaDialogState,
    selectCityAndArea,
    handleCityChangeInAreaNeighboursTable,
    handleAreaChangeInAreaNeighboursTable,
    deleteEntry,
    toggleConfirmationDialogState,
    confirmationDialogState,
    cancelRequest,
    confirmRequest,
    addItem,
    goToAreaNeighbours
  } = props
  const selectedItem = useSelector(state => state.dashboard.selectedItem)
  const classes = useStyles()
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [paginationConstant, setPaginationConstant] = useState(0)
  const lastPage = Math.max(0, Math.ceil(count / rowsPerPage) - 1)
  const [emptyState, setEmptyState] = useState(false)

  useEffect(() => {
    setCount(0)
    resetState(0, 0, 10)
    if (rows && rows.areas && selectedItem === 'areas') {
      setCount(rows.areas.length)
      resetState(0, 0, 10)
    }
    if (rows && rows.cities && selectedItem === 'cities') {
      setCount(rows.cities.length)
      resetState(0, 0, 10)
    }
    if (rows && rows.insurances && selectedItem === 'insurances') {
      setCount(rows.insurances.length)
      resetState(0, 0, 10)
    }
    if (rows && rows.mainSpecialties && selectedItem === 'main specialities') {
      setCount(rows.mainSpecialties.length)
      resetState(0, 0, 10)
    }
    if (rows && rows.subSpecialties && selectedItem === 'sub specialities') {
      setCount(rows.subSpecialties.length)
      resetState(0, 0, 10)
    }
    if (rows && rows.areaNeighbours && selectedItem === 'area neighbours') {
      setCount(rows.areaNeighbours.length)
      resetState(0, 0, 10)
    }
  }, [selectedItem, rows])

  const handleChangeRowsPerPage = event => {
    let value = parseInt(event.target.value, 10)
    setRowsPerPage(value)
    resetState(0, 0, value)
  }

  const handleLastPageButtonClick = event => {
    setPaginationConstant(lastPage * rowsPerPage)
    setPage(lastPage)
  }
  const handleFirstPageButtonClick = () => {
    setPaginationConstant(0)
    setPage(0)
  }
  const handleChangePage = event => {
    if (event === 'next') {
      setPage(page + 1)
      setPaginationConstant((page + 1) * rowsPerPage)
    }
    if (event === 'previous') {
      setPaginationConstant((page - 1) * rowsPerPage)
      setPage(page - 1)
    }
  }

  const resetState = (page, paginationConstant, rowsPerPage) => {
    setPage(page)
    setPaginationConstant(paginationConstant)
    setRowsPerPage(rowsPerPage)
  }

  const renderAreaNeighbours = () => {
    return rows.areaNeighbours
      .slice(paginationConstant, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        return (
          <>
            <TableRow key={index}>
              <TableCell>
                {
                  row.NeighbourAreaLanguageItemModels.find(
                    i => i.LanguageId === 1
                  ).Name
                }
              </TableCell>
              <TableCell>
                {
                  row.NeighbourAreaLanguageItemModels.find(
                    i => i.LanguageId === 2
                  ).Name
                }
              </TableCell>
              <TableCell>
                {
                  row.NeighbourAreaLanguageItemModels.find(
                    i => i.LanguageId === 1
                  ).Url
                }
              </TableCell>
              <TableCell>
                {
                  row.NeighbourAreaLanguageItemModels.find(
                    i => i.LanguageId === 2
                  ).Url
                }
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => deleteEntry(row)}
                  title="delete"
                  aria-label="delete"
                >
                  <Delete className={classes.deleteBtn} />
                </Button>
              </TableCell>
            </TableRow>
          </>
        )
      })
  }

  const renderAreasData = () => {
    return rows.areas
      .slice(paginationConstant, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        return (
          <>
            <TableRow key={index}>
              <TableCell>
                {row.LanguageItemModels.find(i => i.LanguageId === 1).Name}
              </TableCell>
              <TableCell>
                {row.LanguageItemModels.find(i => i.LanguageId === 2).Name}
              </TableCell>
              <TableCell>
                {row.LanguageItemModels.find(i => i.LanguageId === 1).Url}
              </TableCell>
              <TableCell>
                {row.LanguageItemModels.find(i => i.LanguageId === 2).Url}
              </TableCell>
              <TableCell>
                <Button onClick={() => goToAreaNeighbours(row.Id)} title="area neighbours">
                  <AreasIcon color={'primary'} />
                </Button>
              </TableCell>
              <TableCell>
                <Button onClick={() => openEditForm(row, 'edit')} title="edit">
                  <EditIcon color={'primary'} />
                </Button>
              </TableCell>
              <TableCell />
            </TableRow>
          </>
        )
      })
  }

  const renderCitiesData = () => {
    return rows.cities
      .slice(paginationConstant, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        return (
          <TableRow key={index}>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 1).Name}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 2).Name}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 1).Url}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 2).Url}
            </TableCell>
            <TableCell>
              <Button onClick={() => goToCityAreas(row.Id)} title="areas">
                <AreasIcon color={'primary'} />
              </Button>
            </TableCell>
            <TableCell>
              <Button onClick={() => openEditForm(row, 'edit')} title="edit">
                <EditIcon color={'primary'} />
              </Button>
            </TableCell>
            <TableCell />
          </TableRow>
        )
      })
  }

  const renderInsuranceData = () => {
    return rows.insurances
      .slice(paginationConstant, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        return (
          <TableRow key={index}>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 1).Name}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 2).Name}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 1).Url}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 2).Url}
            </TableCell>
            <TableCell>
              <Button onClick={() => openEditForm(row)} title="edit">
                <EditIcon color={'primary'} />
              </Button>
            </TableCell>
            <TableCell />
          </TableRow>
        )
      })
  }

  const renderMainSpecialtyData = () => {
    return rows.mainSpecialties
      .slice(paginationConstant, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        return (
          <TableRow key={index}>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 1).Name}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 2).Name}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 1).Url}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 2).Url}
            </TableCell>
            <TableCell>
              <Button onClick={() => openEditForm(row, 'edit')} title="edit">
                <EditIcon color={'primary'} />
              </Button>
            </TableCell>
            <TableCell />
          </TableRow>
        )
      })
  }

  const renderSubSpecialtyData = () => {
    return rows.subSpecialties
      .slice(paginationConstant, page * rowsPerPage + rowsPerPage)
      .map((row, index) => {
        return (
          <TableRow key={index}>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 1).Name}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 2).Name}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 1).Url}
            </TableCell>
            <TableCell>
              {row.LanguageItemModels.find(i => i.LanguageId === 2).Url}
            </TableCell>
            <TableCell>
              <Button onClick={() => openEditForm(row, 'edit')} title="edit">
                <EditIcon color={'primary'} />
              </Button>
            </TableCell>
            <TableCell />
          </TableRow>
        )
      })
  }

  const renderEmptyState = () => {
    let buttonAction = {}
    let buttonText = ''
    let msg = ''
    let img = {}
    if (
      (selectedItem === 'areas' && rows && !rows.areas && !areaDialogState) ||
      (selectedItem === 'area neighbours' &&
        rows &&
        !rows.areaNeighbours &&
        !cityAndAreaDialogState)
    ) {
      if (selectedItem === 'areas') {
        buttonAction = toggleCityDialogInAreaPage
        buttonText = 'Choose a city'
        msg = 'Choose a city to find what you were looking for!'
        img = NoResult
      }
      if (selectedItem === 'area neighbours' && rows.areaNeighbours !== null) {
        buttonAction = toggleCityAndAreaDialogState
        buttonText = 'Choose an area'
        msg = 'Choose an area to find what you were looking for!'
        img = NoResult
      }
      if (selectedItem === 'areas' && rows && rows.areas === null) {
        buttonAction = addItem
        buttonText = 'Add an area'
        msg = 'No areas here!'
        img = NoOneHere
      }
      if (
        selectedItem === 'area neighbours' &&
        rows &&
        rows.areaNeighbours === null
      ) {
        buttonAction = addItem
        buttonText = 'Add a neighbour'
        msg = 'No neighbours around!'
        img = NoOneHere
      }
      return (
        <State
          buttonAction={buttonAction}
          buttonText={buttonText}
          msg={msg}
          img={img}
        />
      )
    }
  }

  const loadCityDialog = () => {
    return (
      <Dialog
        handleClose={toggleCityDialogInAreaPage}
        open={selectedItem === 'areas' && areaDialogState}
        content={
          <Form
            dropdownData={rows && rows.cities}
            handleDropdownChange={handleCityChange}
            type="chooseCity"
            onSubmit={selectCity}
          />
        }
      />
    )
  }

  const loadConfirmationDialog = () => {
    return (
      <Dialog
        confirmationDialog
        handleClose={toggleConfirmationDialogState}
        open={confirmationDialogState}
        content={
          <ConfirmationForm
            onConfirm={() => confirmRequest()}
            onCancel={() => cancelRequest()}
          />
        }
      />
    )
  }

  const loadCityAndAreaDialog = () => {
    return (
      <Dialog
        handleClose={toggleCityAndAreaDialogState}
        open={selectedItem === 'area neighbours' && cityAndAreaDialogState}
        content={
          <Form
            handleCityChangeInAreaNeighboursTable={
              handleCityChangeInAreaNeighboursTable
            }
            handleAreaChangeInAreaNeighboursTable={
              handleAreaChangeInAreaNeighboursTable
            }
            dropdownData={rows}
            handleDropdownChange={handleCityChange}
            type="chooseCityAndArea"
            onSubmit={selectCityAndArea}
          />
        }
      />
    )
  }

  const renderPaginationComponant = () => {
    return (
      <TablePagination
        component="div"
        ActionsComponent={renderTableActions}
        rowsPerPageOptions={[5, 10, 25, count]}
        count={count}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelDisplayedRows={() =>
          `${page + 1} from ${lastPage + 1} pages (${count} ${selectedItem})`
        }
      />
    )
  }

  const renderTableActions = () => {
    return (
      <div className={classes.paginationWrapper}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
          title="first page"
        >
          <FirstPageIcon />
        </IconButton>
        <IconButton
          onClick={() => handleChangePage('previous')}
          disabled={page === 0}
          aria-label="previous page"
          title="previous page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={() => handleChangePage('next')}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="next page"
          title="next page"
        >
          <KeyboardArrowRight />
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="last page"
          title="last page"
        >
          <LastPageIcon />
        </IconButton>
      </div>
    )
  }

  return (
      <Paper className={classes.paper}>
        {!emptyState && (
          <TableContainer>
            <Table
              className={classes.table}
              aria-labelledby="tableTitle"
              size={'small'}
              aria-label="enhanced table"
            >
              <TableHead>
                <TableRow>
                  {headCells.map(headCell => (
                    <TableCell
                      className={classes.tableHead}
                      key={headCell.id}
                      align={'left'}
                    >
                      {headCell.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedItem === 'areas' &&
                  rows &&
                  rows.areas &&
                  renderAreasData()}
                {selectedItem === 'areas' &&
                  areaDialogState &&
                  loadCityDialog()}
                {selectedItem === 'area neighbours' &&
                  cityAndAreaDialogState &&
                  loadCityAndAreaDialog()}
                {selectedItem === 'cities' &&
                  rows &&
                  rows.cities &&
                  renderCitiesData()}
                {selectedItem === 'insurances' &&
                  rows &&
                  rows.insurances &&
                  renderInsuranceData()}
                {selectedItem === 'main specialities' &&
                  rows &&
                  rows.mainSpecialties &&
                  renderMainSpecialtyData()}
                {selectedItem === 'sub specialities' &&
                  rows &&
                  rows.subSpecialties &&
                  renderSubSpecialtyData()}
                {selectedItem === 'area neighbours' &&
                  rows &&
                  rows.areaNeighbours &&
                  renderAreaNeighbours()}
              </TableBody>
            </Table>
            {renderEmptyState()}
            {loadConfirmationDialog()}
          </TableContainer>
        )}
        {renderPaginationComponant()}
      </Paper>
  )
}

DataTable.propTypes = {
  headCells: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
}
export default DataTable
