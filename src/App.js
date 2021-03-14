import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import TutorialHeader from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import PatientsPage from './content/PatientsPage';
import NewPatientRecordPage from './content/NewPatientRecordPage';

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
            <Route path="/patients" component={PatientsPage} />
            <Route path="/newrecord" component={NewPatientRecordPage} />
          </Switch>
          <div className="bx--grid bx--grid--full-width bx--grid--no-gutter patients-page">
            <div className="bx--row patients-page__footer">
              <div className="bx--col-lg-16">
                <div>GreatBel EOOD (c)</div>
              </div>
            </div>
          </div> 
        </Content>
      </>
    );
  }
}

export default App;
