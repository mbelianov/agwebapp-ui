import React from 'react';
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

import {
  Logout20,
} from '@carbon/icons-react';

import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Header">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="">
          Д-р Арабаджикова
        </HeaderName>
        <HeaderNavigation aria-label="Header menu">
          <HeaderMenuItem element={Link} to="/patients">Моите пациенти</HeaderMenuItem>
          <HeaderMenuItem >Помощ</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/patients">Моите пациенти</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          {/*<HeaderMenuItem href="/logout"><Logout20 /></HeaderMenuItem>-->*/}
          <HeaderGlobalAction aria-label="Logout" onClick={(e) => {
              e.preventDefault();
              window.location.href='/logout';
            }}>
            <Logout20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;