import React, { useEffect, useState } from 'react';
import {Tabs, Tab} from 'carbon-components-react';
import { settings } from 'carbon-components';
import classNames from 'classnames';
import PatientsListTab from './PatientsListTab';
import NewExamTab from './NewExamTab';

const { prefix } = settings;

const TabContentRenderedOnlyWhenSelected = ({
  selected,
  children,
  className,
  ...other
}) =>
  !selected ? (
    <div {...other} className={`${prefix}--visually-hidden`} />
  ) : (
    <div
      {...other}
      className={classNames(className, `${prefix}--tab-content`)}
      role="tabpanel"
      selected={selected}>
      {children}
    </div>
  );

const PatientsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedPatient, setSelectedPatient] = useState('');
  
  const props = {
    tabs: {
      selected: selectedTab,
      role: 'navigation',
    },
    tab: {
      role: 'presentation',
      tabIndex: 0,
    },
  };

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter patients-page">
      <div className="bx--row patients-page__banner">
        <div className="bx--col">
          <h1 className="patients-page__banner-heading">Обработка на пациенти</h1>
        </div>
      </div>
      <div className="bx--row patients-page__body-section">
        <div className="bx--col">
          <Tabs {...props.tabs} aria-label="Tab navigation" onSelectionChange={(selectedTabIndex)=>{setSelectedTab(selectedTabIndex)}}>
            <Tab {...props.tab} label="Списък" renderContent={TabContentRenderedOnlyWhenSelected}>
              <PatientsListTab goToNextTab={(withPatientId)=>{
                setSelectedPatient(withPatientId);
                setSelectedTab(1)}}
              />
            </Tab>
            <Tab {...props.tab}  label="Нов преглед" renderContent={TabContentRenderedOnlyWhenSelected}>
              <NewExamTab patientId={selectedPatient}/>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default PatientsPage;