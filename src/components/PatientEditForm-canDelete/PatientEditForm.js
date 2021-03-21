import React, { useState, useEffect } from 'react';
import {
 TextInput
} from 'carbon-components-react';

/*
Object.keys(props.patientData).forEach((key) => {
  if (props.patientData[key].value == null)
    props.patientData[key].value = '';
})*/
//https://www.pluralsight.com/guides/how-to-use-react-to-set-the-value-of-an-input

const PatientEditForm = (props) => {
  let patientData = Object.assign({}, props.patientData); 
  
  const [firstname, setFirstName] = useState('');

  useEffect(()=>{
    console.log(patientData.firstname.value);
    setFirstName(patientData.firstname.value)
  }, [firstname]);

  const handleInputValueChange = (event) => 
  {
    setFirstName(event.target.value)
  };
  
  //setFirstName(patientData.firstname.value);

  let data = props.patientData;

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
      <div className="bx--row">
        <div className="bx--col-lg-5">
          <TextInput className="patient-edit-form-text-input"
            id="firstname"
            labelText="Име"
            value={firstname}
            onChange={handleInputValueChange}
          />
        </div>
        <div className="bx--col-lg-5">
          <TextInput className="patient-edit-form-text-input"
            id="secondname"
            labelText="Презиме"
            value=''
            //onChange={handleInputValueChange}
          />
        </div>
        <div className="bx--col-lg-6">
          <TextInput className="patient-edit-form-text-input"
            id="lastname"
            labelText="Фамилия"
            value={data.lastname.value}
          />
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-lg-5">
          <TextInput className="patient-edit-form-text-input"
            id="egn"
            labelText="ЕГН"
            value={data.egn.value}
          />
        </div>
        <div className="bx--col-lg-5">
          <TextInput className="patient-edit-form-text-input"
            id="tel"
            labelText="Телефон"
            value={data.tel.value}
          />
        </div>
        <div className="bx--col-lg-6">
          <TextInput className="patient-edit-form-text-input"
            id="email"
            labelText="E-mail"
            value={data.email.value}
          />
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-lg-16">
          <TextInput className="patient-edit-form-text-input"
            id="address"
            labelText="Адрес"
            value={data.address.value}
          />
        </div>
      </div>
    </div>



    //  <section className={`bx--row ${props.className} info-section`}>
    //    <div className="bx--col-md-8 bx--col-lg-4 bx--col-xlg-3">
    //      <h3 className="info-section__heading">{props.heading}</h3>
    //    </div>
    //    {props.children}
    //  </section>
  )
};

export { PatientEditForm  };