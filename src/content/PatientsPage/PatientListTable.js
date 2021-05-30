import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  DataTable,
  TableContainer, Table, TableHead, TableRow, TableExpandHeader,
  TableHeader, TableBody, TableExpandRow, TableCell, TableExpandedRow,
  TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch,
  TableToolbarMenu, TableSelectRow, Button, OverflowMenu, OverflowMenuItem,
  ComposedModal, ModalBody, ModalHeader, ModalFooter, TextInput,
  InlineLoading
} from 'carbon-components-react';
//import axios from 'axios';
import {withAxios} from 'react-axios'

import PatientDetails from './PatientDetails';
import { PatientInfoSection } from '../../components/InfoCards';

const PatientListTable = ({ rows, headers, refreshCallBack, newPatientHandler }) => {
  
  const getPatientDetails = (isRowExpanded, row) => {
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
    //setTouched({});
    //setErrors({});
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
    //setTouched({});
    //setErrors({});
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
                    <TableExpandRow {...getRowProps({ row })} onClick={(event) => handleRowExpandClick(row, event)}>
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
  //const [touched, setTouched] = useState({});
  //const [errors, setErrors] = useState({});
  const [isNewPatient, setNewPatientOnOff] = useState(false);

  
  /*const patientEditModal = () => {

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
      secondname: name => nameValidation('презиме', name),
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
  }*/

  /*const patientDeleteModal = () => {
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
        modalHeading="Вниманиe! Изтриване на пациент! Моля потвърдете!"
        size="lg" //"xs","sm","lg"
        open={patientDeleteModalOpen}
        onRequestClose={() => setPatientDeleteModalOpen(false)}
        onRequestSubmit={() => { deletePatient() }}
        primaryButtonText="ДА"
        secondaryButtonText="НЕ">
        <ModalBody hasForm> 
          <PatientInfoSection
            name={`${values.firstname} ${values.secondname} ${values.lastname}`}
            egn={values.egn}
            email={values.email}
            tel={values.telephone}
            address={values.address}
          />
        </ModalBody>
      </Modal>
    )
  }*/

  const PatientEditModal = withAxios(class PatientEditModalRaw extends React.Component {
    constructor(props) {
      super(props);
      this.state = {savingInProgress: false, values:{}, errors:{}, touched:{}};
    }

    componentDidMount(){
      this.setState({values:values, errors:{}, touched:{}})
    }

    nameValidation = (fieldName, fieldValue) => {
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

    emailValidation = email => {
      if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return null;
      }
      if (email.trim() === '') {
        return 'липсва еmail';
      }
      return 'невалиден email';
    };

    egnValidation = egn => {
      if (/^[0-9]{10}$/.test(egn)) {
        return null;
      }
      if (egn.trim() === '') {
        return 'липсва EGN';
      }
      return 'YYMMDDXXXX';
    };   

    addressValidation = address => {

      if (address.trim() === '') {
        return 'липсва адрес';
      }
      return null;
    };

    telValidation = tel => {
      if (/^(\+|00)[1-9]{1,3}[0-9]{9,14}$/.test(tel)) {
        return null;
      }
      if (tel.trim() === '') {
        return 'липсва номер';
      }
      return '+CCNDCXXXXXXXXX (+359888111222)';
    };

    alwaysValid = value => {
      return null;
    }

    validate = {
      firstname: name => this.nameValidation('име', name),
      secondname: name => this.nameValidation('презиме', name),
      lastname: name => this.nameValidation('фамилия', name),
      email: this.emailValidation,
      telephone: this.telValidation,
      address: this.addressValidation,
      egn: this.egnValidation,
      _id: this.alwaysValid,
    };

    handleChange = evt => {
      const { id, value: newValue, type } = evt.target;

      // keep number fields as numbers
      const value = type === 'number' ? +newValue : newValue;

      // save field values and field modified
      this.setState((state, props) =>{
        let values = state.values;
        let touched = state.touched;

        values[id] = value;
        touched[id] = true;

        return ({values:values, touched:touched})
      });

    };


    handleBlur = evt => {

      const { id, value } = evt.target;

      // remove whatever error was there previously
      // const { [id]: removedError, ...rest } = this.state.errors;

      // check for a new error
      const error = this.validate[id](value);

      // validate the field if the value has been touched
      this.setState((state, props) => {
        let errors = state.errors;
        if (state.touched[id])
          errors[id]=error;
        return({errors:errors})
        //({errors:(error && { [id]: state.touched[id] && error })})
      });
    };

    // form submit handler
    handleSubmit = () => {
      //evt.preventDefault();

      // validate the form
      let values = this.state.values;
      const formValidation = Object.keys(values).reduce(
        (acc, key) => {
          const newError = this.validate[key](values[key]);
          const newTouched = { [key]: true };
          return {
            errors: { ...acc.errors, ...(newError && { [key]: newError }), },
            touched: { ...acc.touched, ...newTouched, },
          };
        },
        {
          //errors: { ...this.state.errors },
          //touched: { ...this.state.touched },
          errors: this.state.errors,
          touched: this.state.touched,          
        },
      );
      
      this.setState({errors:formValidation.errors, touched:formValidation.touched})

      if (
        Object.values(formValidation.errors).every(e => e === null) && // no errors
        Object.values(formValidation.touched).length === Object.values(values).length && // all fields were touched
        Object.values(formValidation.touched).every(t => t === true) // every touched field is true
      ) {
        return true
      }

      return false;
    };

    submitPatientData = () => {   //https://www.digitalocean.com/community/tutorials/react-axios-react

      this.setState({savingInProgress:true});
      let v = this.state.values

      if (!v._id || v._id.length === 0){
        v._id = this.state.values.egn
      }

      this.props.axios.post(process.env.REACT_APP_PATIENT_ADD_API, v)
        .then(res => {
          console.debug(res);
          console.log("submit patient data result: ", res.status, res.statusText, res.data);
          setPatientEditModalOpen(false);
          refreshCallBack();
        })
        .catch(err => {
          alert ("Възникна неочаквана грешка. Презаредете приложението и опитатйте отново!");
          console.log("Error submiting data: ", err.message);
          console.debug(err);
        })
    }

    render() {
      return (
        <ComposedModal preventCloseOnClickOutside size="lg" //"xs","sm","lg"
          //onRequestClose={() => setPatientEditModalOpen(false)}
          open={patientEditModalOpen}>
          <ModalHeader>
            <h3>
              {`Данни за пациент ${isNewPatient?' - нов пациент':' - редакция'}`}
            </h3>
          </ModalHeader>
          <ModalBody hasForm>
            <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
              <div className="bx--row">
                <div className="bx--col-lg-5">
                  <TextInput className="patient-edit-form-text-input"
                    id="egn"
                    labelText="ЕГН"
                    value={this.state.values["egn"]} onChange={this.handleChange} onBlur={this.handleBlur}
                    helperText=' '
                    invalid={this.state.touched.egn && this.state.errors.egn ? true : false}
                    invalidText={this.state.touched.egn && this.state.errors.egn}                  
                    disabled={!isNewPatient || this.state.savingInProgress}
                  />
                </div>
              </div>
              <div className="bx--row">
                <div className="bx--col-lg-5">
                  <TextInput className="patient-edit-form-text-input"
                    id="firstname"
                    labelText="Име"
                    value={this.state.values["firstname"]} onChange={this.handleChange} onBlur={this.handleBlur}
                    helperText=' '
                    invalid={this.state.touched.firstname && this.state.errors.firstname ? true : false}
                    invalidText={this.state.touched.firstname && this.state.errors.firstname}
                    disabled={this.state.savingInProgress}
                  />
                </div>
                <div className="bx--col-lg-5">
                  <TextInput className="patient-edit-form-text-input"
                    id="secondname"
                    labelText="Презиме"
                    value={this.state.values["secondname"]} onChange={this.handleChange} onBlur={this.handleBlur}
                    helperText=' '
                    invalid={this.state.touched.secondname && this.state.errors.secondname ? true : false}
                    invalidText={this.state.touched.secondname && this.state.errors.secondname}
                    disabled={this.state.savingInProgress}
                  />
                </div>
                <div className="bx--col-lg-6">
                  <TextInput className="patient-edit-form-text-input"
                    id="lastname"
                    labelText="Фамилия"              
                    value={this.state.values["lastname"]} onChange={this.handleChange} onBlur={this.handleBlur}
                    helperText=' '
                    invalid={this.state.touched.lastname && this.state.errors.lastname ? true : false}
                    invalidText={this.state.touched.lastname && this.state.errors.lastname}
                    disabled={this.state.savingInProgress}
                  />
                </div>
              </div>
              <div className="bx--row">
                <div className="bx--col-lg-5">
                  <TextInput className="patient-edit-form-text-input"
                    id="telephone"
                    labelText="Телефон"
                    value={this.state.values["telephone"]} onChange={this.handleChange} onBlur={this.handleBlur}
                    helperText=' '
                    invalid={this.state.touched.telephone && this.state.errors.telephone ? true : false}
                    invalidText={this.state.touched.telephone && this.state.errors.telephone}
                    disabled={this.state.savingInProgress}
                  />
                </div>
                <div className="bx--col">
                  <TextInput className="patient-edit-form-text-input"
                    id="email"
                    labelText="E-mail"
                    value={this.state.values["email"]} onChange={this.handleChange} onBlur={this.handleBlur}
                    helperText=' '
                    invalid={this.state.touched.email && this.state.errors.email ? true : false}
                    invalidText={this.state.touched.email && this.state.errors.email}
                    disabled={this.state.savingInProgress}
                  />
                </div>
              </div>
              <div className="bx--row">
                <div className="bx--col-lg-16">
                  <TextInput className="patient-edit-form-text-input"
                    id="address"
                    labelText="Адрес"
                    value={this.state.values["address"]} onChange={this.handleChange} onBlur={this.handleBlur}
                    helperText=' '
                    invalid={this.state.touched.address && this.state.errors.address ? true : false}
                    invalidText={this.state.touched.address && this.state.errors.address}
                    disabled={this.state.savingInProgress}
                  />
                </div>
              </div>              
            </div>
          </ModalBody>
          <ModalFooter>
            <Button kind="secondary" onClick={() => {  setPatientEditModalOpen(false); }} disabled={this.state.savingInProgress}>
              Отказ
            </Button>
            {this.state.savingInProgress ? (
               <InlineLoading  style={{ marginLeft: '1rem' }}  description='Записвам...'  status='active'/>
            ) : (
              <Button kind="primary"
                onClick={() => {
                  if (this.handleSubmit()) 
                    this.submitPatientData();
                  else 
                    alert("Моля уверете се, че всички полета имат валидни стойности!");
                  }}>
                Запиши
              </Button>
            )}            
          </ModalFooter>
        </ComposedModal>
      )
    }
  })

  const PatientDeleteModal = withAxios(class PatientDeleteModalRaw extends React.Component {

    constructor(props) {
      super(props);
      this.state = {deleteInProgress: false};
    }

    deletePatient = () => {
      this.setState({deleteInProgress:true})
      this.props.axios.get(process.env.REACT_APP_PATIENT_DELETE_API + '?id=' + values._id)
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

    render() {
      return (
        <ComposedModal size="lg" //"xs","sm","lg"
          // onRequestClose={() => setPatientDeleteModalOpen(false)}
          //onRequestSubmit={() => { this.deletePatient() }}
          // primaryButtonText="ДА"
          // secondaryButtonText="НЕ"
          open={patientDeleteModalOpen}>
          <ModalHeader>
            <h3>Вниманиe! Изтриване на пациент! Моля потвърдете!</h3>
          </ModalHeader>
          <ModalBody hasForm> 
            <PatientInfoSection
              name={`${values.firstname} ${values.secondname} ${values.lastname}`}
              egn={values.egn}
              email={values.email}
              tel={values.telephone}
              address={values.address}
            />
          </ModalBody>
          <ModalFooter>
            <Button kind="secondary" onClick={() => {  setPatientDeleteModalOpen(false); }} disabled={this.state.deleteInProgress}>
              Отказ
            </Button>
            {this.state.deleteInProgress ? (
               <InlineLoading  style={{ marginLeft: '1rem' }}  description='Изтриване...'  status='active' />
            ) : (
              <Button kind="danger" onClick={() => {this.deletePatient()}}>
                ДА
              </Button>
            )}            
          </ModalFooter>
        </ComposedModal>
      )
    }
  });

  return (
    <>
      {typeof document === 'undefined' ? null : ReactDOM.createPortal(
        //patientEditModal(),
        <PatientEditModal />,
        document.body
      )}
      {typeof document === 'undefined' ? null : ReactDOM.createPortal(
        //patientDeleteModal(),
        <PatientDeleteModal />,
        document.body
      )}
      {dataTable()}
    </>
  );

};

export default PatientListTable;