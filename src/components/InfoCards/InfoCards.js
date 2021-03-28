import React,{ useRef } from 'react';
import { Tile, Button } from 'carbon-components-react';
import { useReactToPrint } from 'react-to-print';
import { ExamInfoComponent } from './ExamInfoComponent';

const PatientInfoSection = (props) => (
  <Tile>
    <section className={`bx--grid ${props.className} info-section`}>
      <div className="bx--row">
        <div className="bx--col-lg-8">
          <div className="patient-info-section__heading">Пациент: </div>
          <div className="patient-info-section__patinet-name">{props.name} </div>
        </div>
        <div className="bx--col-lg-8">
          <div className="bx--row patient-info-section__patient-data-row">
            <span className="patient-info-section__heading">ЕГН:</span>
            <span className="patient-info-section__patient-data">{props.egn}</span>
          </div>
          <div className="bx--row patient-info-section__patient-data-row">
            <span className="patient-info-section__heading">Адрес: </span>
            <span className="patient-info-section__patient-data">{props.address}</span>
          </div>
          <div className="bx--row patient-info-section__patient-data-row">
            <span className="patient-info-section__heading">Телефон: </span>
            <span className="patient-info-section__patient-data">{props.tel}</span>
          </div>
          <div className="bx--row patient-info-section__patient-data-row">
            <span className="patient-info-section__heading">Email: </span>
            <span className="patient-info-section__patient-data">{props.email}</span>
          </div>
        </div>
        {props.children}
      </div>
    </section>
  </Tile>
);


const ExamInfoCard = (props) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    // <ExamInfo examdata={props.examdata} ref={componentRef} handlePrint={handlePrint}/>
    <div>
      <ExamInfoComponent examdata={props.examdata} ref={componentRef}/>
      <Tile><Button kind="primary" onClick={handlePrint}>Печат</Button></Tile>
    </div>
  )
};

export { PatientInfoSection, ExamInfoCard };