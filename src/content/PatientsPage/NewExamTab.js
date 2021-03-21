import React, { useEffect, useState } from 'react';
import { Get } from 'react-axios'
import {
  TabsSkeleton, Tabs, Tab, Form, Button, DatePicker, DatePickerInput, TextInput, ToastNotification, InlineNotification,
} from 'carbon-components-react';
import SearchByEGN from '../../components/SearchByEGN'
import { PatientInfoSection } from '../../components/InfoCards'
import UzdForm from './UzdForm';
import UzdTwinsForm from './UzdTwinsForm';
import UzftForm from './UzftForm';

const NewExamTab = ({ patientId }) => {
  const [patientEGN, setPatientEGN] = useState(patientId);
  const [notifications, setNotifications] = useState({uzd:{kind:"success", displayText: "", asOf:new Date()}})
  var status;
  let patientName;
  let timestamp =  new Date().toISOString();


  const doSearch = (searchTerm) => {
    setPatientEGN(searchTerm);
  }

  const PatientInfo = () => {

    if ((patientEGN === null) || patientEGN.length !== 10)
      return (
        <div>Липсва ЕГН</div>
      )

    return (
      <div>
        <Get url={process.env.REACT_APP_BACK_END_URL + process.env.REACT_APP_PATIENT_FIND_API} params={{ search: patientEGN, exact: true }}>
          {(error, response, isLoading, makeRequest, axios) => {
            if (error) {
              return (
                <div>
                  <p>Възникна грешка: {error.message}</p>
                  <p>Опитайте отново!</p>
                </div>)
            }
            else if (isLoading) {
              return (<TabsSkeleton />)
            }
            else if (response !== null) {
              if (response.data.count === 0)
                return (
                  <div>Няма такъв пациент</div>
                )
              patientName = `${response.data.docs[0].firstname} ${response.data.docs[0].secondname} ${response.data.docs[0].lastname}`;
              return (
                <PatientInfoSection
                  name={patientName}
                  egn={response.data.docs[0].egn}
                  email={response.data.docs[0].email}
                  tel={response.data.docs[0].telephone}
                  address={response.data.docs[0].address}
                />
              )
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    )
  }

  const handleSubmit = (content) => {
    console.debug(content)
    showNotification(content.formId, {kind:"success", displayText: "success", asOf:new Date()});
  }

  const showNotification = (formId, message) => {
    setNotifications({[formId]:message});
    status = {[formId]:message}
  }

  //useEffect (() => {setTimeout(() => {setNotificationState(false)}, 5000)}, [notificationState]);

  return (
    <div className="bx--grid bx--grid--full-width">
      <div className="bx--row patient-tab--new-exam-r1">
        <div className="bx--col-lg-5 bx--col-md-4">
          
          <SearchByEGN initialSearchTerm={patientId} callback_getSearchTerm={(searchTerm) => { doSearch(searchTerm) }} />
        </div>
      </div>
      <div className="bx--row ">
        <div className="bx--col-lg-16">
          <PatientInfo />
        </div>
      </div>
      <div className="bx--row ">
        <div className="bx--col-lg-16">
          {(() => {
            if ((patientEGN === null) || patientEGN.length !== 10)
              return false;

            return (
              <>            
              <Tabs aria-label="Tab navigation">
                <Tab label="УЗД">
                  <UzdForm onSubmit={(examvalues) => {
                    handleSubmit({
                      timestamp:timestamp,
                      formId:"uzd",
                      patient: {
                        patientEGN:patientEGN, 
                        patientName:patientName,
                      },
                      exam: {
                        examTitle:"УЗД",
                        examValues: {...examvalues}
                      }})
                    }}
                    //onChange={showNotification}
                    id="uzd" notificationFromParent={notifications.uzd}/>
                    
                </Tab>
                <Tab label="УЗДБ">
                  <UzdTwinsForm onSubmit={() => {}} />
                </Tab>
                <Tab label="УЗПТ">
                  <UzftForm onSubmit={() => {}} />
                </Tab>
              </Tabs>
              </>
            )
          })()}
        </div>
      </div>
    </div >
  );
}

export default NewExamTab;