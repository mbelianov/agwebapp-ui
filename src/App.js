import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import Header from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import { UserState } from './contexts/User/UserState';
import LandingPage from './content/LandingPage';
import PatientsPage from './content/PatientsPage';
import metadata from './build-version.json'


class App extends Component {

  render() {
    return (
      <UserState>

          <Header />
          <Content>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/patients" component={PatientsPage} />
            </Switch>
            <div className="bx--grid bx--grid--full-width bx--grid--no-gutter patients-page">
              <div className="bx--row patients-page__footer">
                <div className="bx--col-lg-16">
                  <div>GreatBel EOOD (c) - {`UI Version ${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision} ${metadata.buildTag} @ ${metadata.buildTime}`}</div>
                </div>
              </div>
            </div>
          </Content>

      </UserState>
    );
  }
}

export default App;
