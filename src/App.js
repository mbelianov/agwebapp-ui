import React, { Component, useEffect } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react';
import Header from './components/TutorialHeader';
import { Route, Switch } from 'react-router-dom';
import { useUser, UserState as UserStateContextProvider } from './contexts/User/UserState';
import { getUser, setLoading } from "./contexts/User/UserAction";
import LandingPage from './content/LandingPage';
import PatientsPage from './content/PatientsPage';


class App extends Component {

  render() {
    return (
      <UserStateContextProvider>
        
        <UserStateContextConsumer />
        
      </UserStateContextProvider>
    );
  }
}

const UserStateContextConsumer = () => {
  const [userState, userDispatch] = useUser();
  

  // get user info handler
  const getUserInfoHandler = async () => {
    await getUser(userDispatch);
    setLoading(userDispatch, false);
  };

  // get user info
  useEffect(() => {
    getUserInfoHandler();
  }, []);

  return(
    <>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/patients" component={PatientsPage} />
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
  )
}

export default App;
