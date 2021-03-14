import React, {useState } from 'react';
import { Get } from 'react-axios'
import {TabsSkeleton, Tile
} from 'carbon-components-react';
import SearchByEGN from '../../components/SearchByEGN'
//import { Tile } from 'carbon-components';


const NewExamTab = ({patientId}) => {
  const [patientEGN, setPatientEGN] = useState(patientId);

  const doSearch = (searchTerm) => {
    setPatientEGN(searchTerm);
  }

  const PatientInfo = () => {

    if ((patientEGN === null) || patientEGN.length !== 10)
      return(
        <div>Липсва ЕГН</div>
      )

    return (
      <div>
        <Get url={process.env.REACT_APP_BACK_END_URL + process.env.REACT_APP_PATIENT_FIND_API} params={{search:patientEGN, exact:true}}>
          {(error, response, isLoading, makeRequest, axios) => {
            if (error) {
              return (
                <div>
                  <p>Възникна грешка: {error.message}</p>
                  <p>Опитайте отново!</p>
                </div>)
            }
            else if (isLoading) {
              return (<TabsSkeleton /> )
            }
            else if (response !== null) {
              if (response.data.count === 0)
                return (
                  <div>Няма такъв пациент</div>
                )
              return (
                <Tile>
                  {JSON.stringify(response.data.docs[0])}
                </Tile>
              )
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    )
  }

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--condensed">
      <div className="bx--row patient-tab--new-exam-r1">
        <div className="bx--col-lg-5 bx--col-md-4">
          <SearchByEGN initialSearchTerm={patientId} callback_getSearchTerm={(searchTerm)=>{doSearch(searchTerm)}}/>
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