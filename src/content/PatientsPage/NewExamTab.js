import React, { useState } from 'react';
import { Get } from 'react-axios'
import {
  TabsSkeleton, Tabs, Tab
} from 'carbon-components-react';
//import axios from 'axios'
import SearchByEGN from '../../components/SearchByEGN'
import { PatientInfoSection } from '../../components/InfoCards'
import { NewExamForm } from './NewExamForm'

const NewExamTab = ({ patientId }) => {
  const [patientEGN, setPatientEGN] = useState(patientId);
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
        <Get url={process.env.REACT_APP_PATIENT_FIND_API} params={{ search: patientEGN, exact: true }}>
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
                      <NewExamForm type="uzd" examTitle="Ултразвукова диагностика" patientEGN={patientEGN} patientName={patientName} />
                    </Tab>      
                    <Tab label="УЗДБ">
                      <NewExamForm  type="uzdb"  examTitle="Ултразвукова диагностика - Блинзаци" patientEGN={patientEGN} patientName={patientName} />
                    </Tab>                                   
                    <Tab label="УЗПТ">
                      <NewExamForm  type="uzft"  examTitle="Ултразвуков първи триместър"  patientEGN={patientEGN} patientName={patientName}/>
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

    </div >
  );
}

export default NewExamTab;