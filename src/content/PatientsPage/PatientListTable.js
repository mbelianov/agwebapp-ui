import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  DataTable,
  TableContainer, Table, TableHead, TableRow, TableExpandHeader,
  TableHeader, TableBody, TableExpandRow, TableCell, TableExpandedRow,
  TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch,
  TableToolbarMenu, TableSelectRow, Button, OverflowMenu, OverflowMenuItem,
  Modal, ModalBody, TextInput
} from 'carbon-components-react';
import axios from 'axios';

import PatientDetails from './PatientDetails';

const PatientListTable = ({ rows, headers, refreshCallBack, newPatientHandler }) => {

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
    setTouched({});
    setErrors({});
    setNewPatientOnOff(false);
    setPatientEditModalOpen(true)
  }

  const extractCellValues = (row) => {
    const getCellValue = (header) => {
      let result = (row === null ? '' : row.cells.find(cell => cell.info.header === header).value);
      return result || '';
    }

    setValues({
      _id: row ?row.id:getCellValue('egn'),
      firstname: getCellValue('firstname'),
      secondname: getCellValue('secondname'),
      lastname: getCellValue('lastname'),
      egn: getCellValue('egn'),
      telephone: getCellValue('telephone'),
      email: getCellValue('email'),
      address: getCellValue('address')
    })
  }

  const handleNewExam = (row) => {
    newPatientHandler(row.id);
  }

  const handleNewPatient = () => {
    extractCellValues(null);
    setTouched({});
    setErrors({});
    setNewPatientOnOff(true);
    setPatientEditModalOpen(true)
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
                  <TableToolbarAction onClick={() => {}}>
                    -----
                  </TableToolbarAction>
                </TableToolbarMenu>
                <Button onClick={handleNewPatient}>Нов Пациент</Button>
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
                          <OverflowMenuItem itemText="Изтриване" onClick={() => handleRowDelete(row)} requireTitle hasDivider isDelete />

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
  const [values, setValues] = useState({});
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isNewPatient, setNewPatientOnOff] = useState(false);

  const patientEditModal = () => {

    const nameValidation = (fieldName, fieldValue) => {
      if (fieldValue.trim() === '') {
        return `липсва ${fieldName}`;
      }
      if (/[^a-zа-яA-ZА-Я -]/.test(fieldValue)) {
        return 'невалидни символи';
      }
      if (fieldValue.trim().length < 3) {
        return `мин 3 символа`;
      }
      return null;
    };

    const emailValidation = email => {
      if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return null;
      }
      if (email.trim() === '') {
        return 'липсва еmail';
      }
      return 'невалиден email';
    };

    const egnValidation = egn => {
      if (/^[0-9]{10}$/.test(egn)) {
        return null;
      }
      if (egn.trim() === '') {
        return 'липсва EGN';
      }
      return 'YYMMDDXXXX';
    };   

    const addressValidation = address => {

      if (address.trim() === '') {
        return 'липсва адрес';
      }
      return null;
    };

    const telValidation = tel => {
      if (/^(\+|00)[0-9]{1,3}[0-9]{4,14}$/.test(tel)) {
        return null;
      }
      if (tel.trim() === '') {
        return 'липсва номер';
      }
      return '+CCNDCXXXXXXXXX';
    };

    const alwaysValid = value => {
      return null;
    }

    const validate = {
      firstname: name => nameValidation('име', name),
      secondname: name => nameValidation('презиме Name', name),
      lastname: name => nameValidation('фамилия', name),
      email: emailValidation,
      telephone: telValidation,
      address: addressValidation,
      egn: egnValidation,
      _id: alwaysValid,
    };

    const handleChange = evt => {
      const { id, value: newValue, type } = evt.target;

      // keep number fields as numbers
      const value = type === 'number' ? +newValue : newValue;

      // save field values
      setValues({
        ...values,
        [id]: value,
      });

      // was the field modified
      setTouched({
        ...touched,
        [id]: true,
      });
    };


    const handleBlur = evt => {

      const { id, value } = evt.target;

      // remove whatever error was there previously
      const { [id]: removedError, ...rest } = errors;

      // check for a new error
      const error = validate[id](value);

      // // validate the field if the value has been touched
      setErrors({
        ...rest,
        ...(error && { [id]: touched[id] && error }),
      });
    };

    // form submit handler
    const handleSubmit = () => {
      //evt.preventDefault();

      // validate the form
      const formValidation = Object.keys(values).reduce(
        (acc, key) => {
          const newError = validate[key](values[key]);
          const newTouched = { [key]: true };
          return {
            errors: { ...acc.errors, ...(newError && { [key]: newError }), },
            touched: { ...acc.touched, ...newTouched, },
          };
        },
        {
          errors: { ...errors },
          touched: { ...touched },
        },
      );
      setErrors(formValidation.errors);
      setTouched(formValidation.touched);

      if (
        !Object.values(formValidation.errors).length && // errors object is empty
        Object.values(formValidation.touched).length === Object.values(values).length && // all fields were touched
        Object.values(formValidation.touched).every(t => t === true) // every touched field is true
      ) {
        return true
      }

      return false;
    };

    const submitPatientData = () => {
      //https://www.digitalocean.com/community/tutorials/react-axios-react

      let v = {...values}

      if (!v._id || v._id.length === 0){
        v._id = values.egn
      }


      axios.post(process.env.REACT_APP_BACK_END_URL + process.env.REACT_APP_PATIENT_ADD_API, v)
        //axios.post("http://localhost:3000"+process.env.REACT_APP_PATIENT_ADD_API, values)
        .then(res => {
          console.debug(res);
          console.log("submit patient data result: ", res.status, res.statusText, res.data);
          refreshCallBack();
        })
        .catch(err => {
          alert ("Възникна неочаквана грешка. Презаредете приложението и опитатйте отново!");
          console.log("Error submiting data: ", err.message);
          console.debug(err);
        })
    }

    return (
      <Modal
        preventCloseOnClickOutside
        shouldSubmitOnEnter
        modalHeading={`Данни за пациент ${isNewPatient?' - нов пациент':' - редакция'}`}
        size="lg" //"xs","sm","lg"
        open={patientEditModalOpen}
        onRequestClose={() => setPatientEditModalOpen(false)}
        onRequestSubmit={() => {
          if (handleSubmit()) {
            submitPatientData();
            setPatientEditModalOpen(false)
          }
          else {
            alert("Моля уверете се, че всички полета имат валидни стойности!");
          }
        }}
        primaryButtonText="Запиши"
        secondaryButtonText="Отказ">
        <ModalBody hasForm>
          <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
            <div className="bx--row">
              <div className="bx--col-lg-5">
                <TextInput className="patient-edit-form-text-input"
                  id="egn"
                  labelText="ЕГН"
                  value={values["egn"]} onChange={handleChange} onBlur={handleBlur}
                  helperText=' '
                  invalid={touched.egn && errors.egn ? true : false}
                  invalidText={touched.egn && errors.egn}                  
                  disabled={!isNewPatient}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col-lg-5">
                <TextInput className="patient-edit-form-text-input"
                  id="firstname"
                  labelText="Име"
                  value={values["firstname"]} onChange={handleChange} onBlur={handleBlur}
                  //value={firstname} onChange={(event) => {setFirstName(event.target.value);}} 
                  helperText=' '
                  invalid={touched.firstname && errors.firstname ? true : false}
                  invalidText={touched.firstname && errors.firstname}
                />

              </div>
              <div className="bx--col-lg-5">
                <TextInput className="patient-edit-form-text-input"
                  id="secondname"
                  labelText="Презиме"
                  //value={secondname} onChange={(event) => {setSecondName(event.target.value);}}
                  value={values["secondname"]} onChange={handleChange} onBlur={handleBlur}
                  helperText=' '
                  invalid={touched.secondname && errors.secondname ? true : false}
                  invalidText={touched.secondname && errors.secondname}
                />
              </div>
              <div className="bx--col-lg-6">
                <TextInput className="patient-edit-form-text-input"
                  id="lastname"
                  labelText="Фамилия"
                  //value={lastname} onChange={(event) => {setLasttName(event.target.value);}}                  
                  value={values["lastname"]} onChange={handleChange} onBlur={handleBlur}
                  helperText=' '
                  invalid={touched.lastname && errors.lastname ? true : false}
                  invalidText={touched.lastname && errors.lastname}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col-lg-5">
                <TextInput className="patient-edit-form-text-input"
                  id="telephone"
                  labelText="Телефон"
                  //value={tel} onChange={(event) => {setTel(event.target.value);}}
                  value={values["telephone"]} onChange={handleChange} onBlur={handleBlur}
                  helperText=' '
                  invalid={touched.telephone && errors.telephone ? true : false}
                  invalidText={touched.telephone && errors.telephone}
                />
              </div>
              <div className="bx--col">
                <TextInput className="patient-edit-form-text-input"
                  id="email"
                  labelText="E-mail"
                  //value={email} onChange={(event) => {setEmail(event.target.value);}}
                  value={values["email"]} onChange={handleChange} onBlur={handleBlur}
                  helperText=' '
                  invalid={touched.email && errors.email ? true : false}
                  invalidText={touched.email && errors.email}
                />
              </div>
            </div>
            <div className="bx--row">
              <div className="bx--col-lg-16">
                <TextInput className="patient-edit-form-text-input"
                  id="address"
                  labelText="Адрес"
                  //value={address} onChange={(event) => {setAddress(event.target.value);}}
                  value={values["address"]} onChange={handleChange} onBlur={handleBlur}
                  helperText=' '
                  invalid={touched.address && errors.address ? true : false}
                  invalidText={touched.address && errors.address}
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
      axios.get(process.env.REACT_APP_BACK_END_URL + process.env.REACT_APP_PATIENT_DELETE_API + '?id=' + values._id)
        .then(res => {
          console.log("Success");
          console.log(res);
          setPatientDeleteModalOpen(false)
          refreshCallBack()
        })
        .catch(err => {
          alert ("Възникна неочаквана грешка. Презаредете приложението и опитатйте отново!");
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
            {values.firstname + ' ' + values.secondname + ' ' + values.lastname + ' - ' + values.egn}
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