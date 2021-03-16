import React from 'react';
import { Tile } from 'carbon-components-react';

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

const InfoCard = (props) => {
  return (
    <article className="info-card bx--col-md-4 bx--col-lg-4 bx--col-xlg-3 bx--offset-xlg-1">
      <h4 className="info-card__heading">{props.heading}</h4>
      <p className="info-card__body">{props.body}</p>
      {props.icon}
    </article>
  );
};

export { PatientInfoSection, InfoCard };