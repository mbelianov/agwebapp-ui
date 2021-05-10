import React from 'react';
import {
  HeaderPanel, Switcher, SwitcherItem, SwitcherDivider,
} from 'carbon-components-react';
import { useUser } from '../../contexts/User/UserState';
import { getUser, setLoading } from "../../contexts/User/UserAction";

const UserMenu = ({expanded, toggler}) => {

  const [userState, userDispatch] = useUser();

    // get user info handler
  const getUserInfoHandler = async () => {
    await getUser(userDispatch);
    setLoading(userDispatch, false);
  };

  return (
    <HeaderPanel expanded={expanded} aria-label="User mennu">
      <Switcher aria-label="user menu options">
        {!userState.error && userState.user && userState.user.isAuthenticated() && <><h4>{userState.user.name}</h4><SwitcherDivider /></>}
        {(userState.error || !userState.user || !userState.user.isAuthenticated()) && <SwitcherItem aria-label="login" onClick={()=>{toggler(); getUserInfoHandler()}}>Login</SwitcherItem>}
        {!userState.error && userState.user && userState.user.isAuthenticated() && <SwitcherItem aria-label="logout" href={process.env.REACT_APP_APPID_LOGOUT_URL} onClick={()=>{toggler()}}>Logout</SwitcherItem>}
      </Switcher>
    </HeaderPanel>
  )
}

export default UserMenu;