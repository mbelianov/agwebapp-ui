import React, { useState } from 'react';
import {
  Header, Switcher, SwitcherItem, SwitcherDivider,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  Button,
  ButtonSet
} from 'carbon-components-react';
import { UserContext } from '../../contexts/User/UserContext'
import { useUser, UserState } from '../../contexts/User/UserState';
import { getUser, setLoading } from "../../contexts/User/UserAction";

import {
  Logout16,
  UserAvatar20,
  Settings20,
  Close20
} from '@carbon/icons-react';

import { Link } from 'react-router-dom';

const TutorialHeader = () => {

  const [isRightSideBarExpanded, toggleRightSideBar] = useState(false);
  const [userState, userDispatch] = useUser();
  // get user info handler
  const getUserInfoHandler = async () => {
    await getUser(userDispatch);
    setLoading(userDispatch, false);
  };

  return (

    <HeaderContainer render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Header">
        <SkipToContent />
        <HeaderMenuButton aria-label="Open menu" onClick={onClickSideNavExpand} isActive={isSideNavExpanded} />
        <HeaderName element={Link} to="/" prefix="">
          Д-р Арабаджикова
            </HeaderName>
        <HeaderNavigation aria-label="Header menu">
          <HeaderMenuItem element={Link} to="/patients">Моите пациенти</HeaderMenuItem>
          <HeaderMenuItem >Помощ</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav aria-label="Side navigation" expanded={isSideNavExpanded} isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/patients">Моите пациенти</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="right panel" onClick={() => { toggleRightSideBar(!isRightSideBarExpanded) }} >
            {isRightSideBarExpanded ? <Close20 /> : <UserAvatar20 />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        <HeaderPanel expanded={isRightSideBarExpanded} >
          <Switcher>

            <h3>{userState.user.name}</h3>

            <SwitcherDivider />
            <SwitcherItem onClick={getUserInfoHandler}>Login</SwitcherItem>
            <SwitcherItem href="/logout">Logout</SwitcherItem>
          </Switcher>
        </HeaderPanel>
      </Header>
    )}
    />
  )
};

export default TutorialHeader;