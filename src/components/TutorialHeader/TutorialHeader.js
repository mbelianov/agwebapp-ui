import React, { useState } from 'react';
import {
  Header, 
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import UserMenu from "./UserMenu";

import {
  UserAvatar20,
  Close20
} from '@carbon/icons-react';

import { Link } from 'react-router-dom';

const TutorialHeader = () => {

  const [isUserMenuExapnded, toggleUserMenu] = useState(false);
  const userMenuToggler = () =>{
    toggleUserMenu(isUserMenuExapnded => !isUserMenuExapnded);
  }

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
          <HeaderGlobalAction aria-label="right panel" onClick={() => { userMenuToggler() }} >
            {isUserMenuExapnded ? <Close20 /> : <UserAvatar20 />}
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        
          <UserMenu expanded={isUserMenuExapnded} toggler={userMenuToggler}/>
        
      </Header>
    )}
    />
  )
};

export default TutorialHeader;