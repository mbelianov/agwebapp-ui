import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  DataTable,
  TableContainer, Table, TableHead, TableRow, TableExpandHeader,
  TableHeader, TableBody, TableExpandRow, TableCell, TableExpandedRow,
  TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch,
  TableToolbarMenu, TableSelectRow, Button, OverflowMenu, OverflowMenuItem,
  Modal, ComposedModal, ModalBody, ModalHeader, TextInput, Select, SelectItem
} from 'carbon-components-react';
import axios from 'axios';

import PatientDetails from './PatientDetails';
import { PatientEditForm } from '../../components/PatientEditForm/PatientEditForm';

const PatientListTable = ({ rows, headers, resetCallBack }) => {

  const getPatientDetails = (isRowExpanded, row) => {
    //const row = rows.find(({ id }) => id === rowId);
    /*
    let itemList=items.map((item,index)=>{
      return <li key={index}>{item}</li>
      })
    */

    if (isRowExpanded) {
      const egnCell = row.cells.find(cell => cell.info.header === "egn");
      return (
        <div><PatientDetails patientEGN={egnCell.value} /> </div>
      )
    }

  };

  const handleRowExpandClick = (row, event) => {
    //event.preventDefault();  
    if (event.target.nodeName !== 'svg') {
      console.log("Just click, no expand");
      return;
    }

    if (!row.isExpanded) {
      console.log("we need to epxpad this raw");
    }
  }

  const handleRowDelete = (row) => {
    extractCellValues(row);
    setPatientDeleteModalOpen(true)
  }

  const handleRowEdit = (row) => {
    extractCellValues(row);
    setPatientEditModalOpen(true)
  }

  const extractCellValues = (row) => {
    const getCellValue = (header) => {
      let result = (row === null ? '' : row.cells.find(cell => cell.info.header === header).value);
      return result || '';
    }
    setFirstName(getCellValue('firstname'));
    setSecondName(getCellValue('secondname'));
    setLasttName(getCellValue('lastname'));
    setEgn(getCellValue('egn'));
    setTel(getCellValue('telephone'));
    setEmail(getCellValue('email'));
    setAddress(getCellValue('address'));
    setId(row.id);
  }

  const handleNewExam = (row) => {

  }

  const dataTable = () => {
    return (
      <DataTable
        isSortable
        rows={rows}
        headers={headers}
        render={({
          rows,
          headers,
          getHeaderProps,
          getRowProps,
          getTableProps,
          getToolbarProps,
          onInputChange,
          getSelectionProps,
        }) => (
          <TableContainer
            title="Списък с пациенти"
            description="Списък с пациенти според критерия за търсене"
            locale="bg">
            <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
              <TableToolbarContent>
                <TableToolbarSearch onChange={onInputChange} />
                <TableToolbarMenu>
                  <TableToolbarAction onClick={() => { }}>
                    Изтриване
                </TableToolbarAction>
                </TableToolbarMenu>
                <Button >Нов Пациент</Button>
              </TableToolbarContent>
            </TableToolbar>
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  <TableExpandHeader />
                  <TableExpandHeader />
                  {headers.map(header => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                  <TableExpandHeader />
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <React.Fragment key={row.id}>
                    <TableExpandRow {...getRowProps({ row })}
                      onClick={(event) => handleRowExpandClick(row, event)}>
                      <TableSelectRow {...getSelectionProps({ row })} />
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                      <TableCell>
                        <OverflowMenu flipped>
                          <OverflowMenuItem itemText="Редакция" onClick={() => handleRowEdit(row)} />
                          <OverflowMenuItem itemText="Нов преглед" onClick={() => handleNewExam(row)} />
                          <OverflowMenuItem
                            onClick={() => handleRowDelete(row)}
                            requireTitle hasDivider isDelete
                            itemText="Изтриване"
                          />

                        </OverflowMenu>
                      </TableCell>
                    </TableExpandRow>
                    <TableExpandedRow colSpan={headers.length + 3}>
                      <div> {getPatientDetails(row.isExpanded, row)}</div>

                    </TableExpandedRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    );
  }

  const [patientEditModalOpen, setPatientEditModalOpen] = useState(false);
  const [patientDeleteModalOpen, setPatientDeleteModalOpen] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [secondname, setSecondName] = useState('');
  const [lastname, setLasttName] = useState('');
  const [egn, setEgn] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [id, setId] = useState('');


  const patientEditModal = () => {

    const getUpdatedPatientData = () => {
    }
    return (
      <Modal
        preventCloseOnClickOutside
        shouldSubmitOnEnter
        modalHeading="Редактиране данни за пациент"
        //size="lg" //"xs","sm","lg"
        open={patientEditModalOpen}
        onRequestClose={() => setPatientEditModalOpen(false)}
        onRequestSubmit={() => { console.log("submited"); setPatientEditModalOpen(false) }} //https://www.digitalocean.com/community/tutorials/react-axios-react
        primaryButtonText="Запиши"
        secondaryButtonText="Отказ">
        <ModalBody hasForm>
          <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
            <div className="bx--row">
              <div className="bx--col-lg-5">
                <TextInput className="patient-edit-form-text-input"
                  id="egn"
                  labelText="ЕГН"
                  value={egn}
                  disabled
                  onChange={(event) => {
                    setEgn(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col-lg-5">
                <TextInput className="patient-edit-form-text-input"
                  id="firstname"
                  labelText="Име"
                  value={firstname}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                  }}
                />
              </div>
              <div className="bx--col-lg-5">
                <TextInput className="patient-edit-form-text-input"
                  id="secondname"
                  labelText="Презиме"
                  value={secondname}
                  onChange={(event) => {
                    setSecondName(event.target.value);
                  }}
                />
              </div>
              <div className="bx--col-lg-6">
                <TextInput className="patient-edit-form-text-input"
                  id="lastname"
                  labelText="Фамилия"
                  value={lastname}
                  onChange={(event) => {
                    setLasttName(event.target.value);
                  }}                  
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col-lg-5">
                <TextInput className="patient-edit-form-text-input"
                  id="tel"
                  labelText="Телефон"
                  value={tel}
                  onChange={(event) => {
                    setTel(event.target.value);
                  }}
                />
              </div>
              <div className="bx--col">
                <TextInput className="patient-edit-form-text-input"
                  id="email"
                  labelText="E-mail"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col-lg-16">
                <TextInput className="patient-edit-form-text-input"
                  id="address"
                  labelText="Адрес"
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    )
  }

  const patientDeleteModal = () => {
    const deletePatient = () => {
      axios.get(process.env.REACT_APP_BACK_END_URL + process.env.REACT_APP_PATIENT_DELETE_API + '?id=' + id)
        .then(res => {
          console.log("Success");
          console.log(res);
          setPatientDeleteModalOpen(false)
          resetCallBack({
            searchParams: {
              search: '',
              bookmark: null,
              pagesize: 5
            },
            currentPage: 1
          })
        })
        .catch(err => {
          console.log("Error");
          console.log(err);
        })
    }
    return (
      <Modal
        danger
        modalHeading="Вниманиe! Изтриване на пациент"
        //size="lg" //"xs","sm","lg"
        open={patientDeleteModalOpen}
        onRequestClose={() => setPatientDeleteModalOpen(false)}
        onRequestSubmit={() => { deletePatient() }}
        primaryButtonText="ДА"
        secondaryButtonText="НЕ">
        <ModalBody>
          <p>
            Моля потвърдете изтриване на пациент:
          </p>
          <br></br>
          <p>
            {firstname + ' ' + secondname + ' ' + lastname + ' - ' + egn}
          </p>
        </ModalBody>
      </Modal>
    )
  }

  return (
    <>
      {typeof document === 'undefined' ? null : ReactDOM.createPortal(
        patientEditModal(),
        document.body
      )}
      {typeof document === 'undefined' ? null : ReactDOM.createPortal(
        patientDeleteModal(),
        document.body
      )}
      {dataTable()}
    </>
  );

};

export default PatientListTable;