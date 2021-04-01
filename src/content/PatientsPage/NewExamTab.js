import React, { useState } from 'react';
import { Get } from 'react-axios'
import {
  TabsSkeleton, Tabs, Tab
} from 'carbon-components-react';
import axios from 'axios'
import SearchByEGN from '../../components/SearchByEGN'
import { PatientInfoSection } from '../../components/InfoCards'
import UzdForm from './UzdForm';
import UzdTwinsForm from './UzdTwinsForm';
import UzftForm from './UzftForm';
import { NewExamForm } from './NewExamForm'

const NewExamTab = ({ patientId }) => {
  const [patientEGN, setPatientEGN] = useState(patientId);
  const [notifications, setNotifications] = useState({
    uzd:{kind:"success", displayText: "", asOf:new Date()},
    uzdb:{kind:"success", displayText: "", asOf:new Date()},
    "uzd-twins":{kind:"success", displayText: "", asOf:new Date()},
    uzft:{kind:"success", displayText: "", asOf:new Date()},
  })
  const [timestamp, setTimestamp] = useState(new Date().toISOString());
  let patientName;
  


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
                <>
                  <PatientInfoSection
                    name={patientName}
                    egn={response.data.docs[0].egn}
                    email={response.data.docs[0].email}
                    tel={response.data.docs[0].telephone}
                    address={response.data.docs[0].address}
                  />
                  <Tabs className="new-exam-tabs" aria-label="Tab navigation">
                  <Tab label="УЗД">
                      <NewExamForm
                        type="uzd"
                        examTitle="Ултразвукова диагностика"
                        patientEGN={patientEGN}
                        patientName={patientName}
                      />
                    </Tab>      
                    <Tab label="УЗДБ">
                      <NewExamForm
                        type="uzdb"
                        examTitle="Ултразвукова диагностика - Блинзаци"
                        patientEGN={patientEGN}
                        patientName={patientName}
                      />
                    </Tab>                                   
                    <Tab label="УЗПТ">
                      <NewExamForm
                        type="uzft"
                        examTitle="Ултразвуков първи триместър"
                        patientEGN={patientEGN}
                        patientName={patientName}
                      />
                    </Tab>
                  </Tabs>
                </>
              )
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    )
  }

  const handleSubmit = (content) => {
    console.debug("submitting: ", content);
    showNotification(content.examId, {kind:"info", displayText: "Записвам...", asOf:new Date()});
    axios.post(process.env.REACT_APP_BACK_END_URL + process.env.REACT_APP_EXAM_ADD_API, content)
    //axios.post("http://localhost:3000/api/exams/add", content)
        .then(res => {
          console.debug(res);
          console.log("submit exam record result: ", res.status, res.statusText, res.data);
          showNotification(content.examId, {kind:"success", displayText: "Успех", asOf:new Date()});
        })
        .catch(err => {
          showNotification(content.examId, {kind:"error", displayText: "Грешка при запис. Опитайте отново.", asOf:new Date()});
          
          console.log("Error submiting data: ", err.message);
          console.debug(err);
        })
  }

  const showNotification = (formId, message) => {
    setNotifications({[formId]:message});

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
            return false; //depricated and temporary disable the rest of the code
            if ((patientEGN === null) || patientEGN.length !== 10) return false;
            return (
              <>            
              <Tabs className="new-exam-tabs" aria-label="Tab navigation">
                <Tab label="УЗД">
                  <UzdForm onSubmit={(examvalues) => {
                    handleSubmit({
                      timestamp:timestamp,
                      examId:"uzd",
                      patient: {patientEGN:patientEGN, patientName:patientName},
                      exam: {examTitle:"Ултразвукова диагностика",  examValues: {...examvalues}}})
                    }}
                    id="uzd" notificationFromParent={notifications.uzd}/>                  
                </Tab>
                <Tab label="УЗДБ">
                  <UzdTwinsForm onSubmit={(examvalues) => {
                    handleSubmit({
                      timestamp:timestamp,
                      examId:"uzdb",
                      patient: {patientEGN:patientEGN, patientName:patientName},
                      exam: {examTitle:"Ултразвукова диагностика - близнаци", examValues: {...examvalues}}})
                    }}
                    id="uzdb" notificationFromParent={notifications.uzdb}/>
                </Tab>
                <Tab label="УЗПТ-old">
                  <UzftForm onSubmit={(examvalues) => {
                    handleSubmit({
                      timestamp:timestamp,
                      examId:"uzft",
                      patient: {patientEGN:patientEGN, patientName:patientName},
                      exam: {examTitle:"Ултразвуков първи триместър", examValues: {...examvalues}}})
                    }}
                    id="uzft" notificationFromParent={notifications.uzft}/>
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