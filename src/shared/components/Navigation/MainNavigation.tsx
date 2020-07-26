import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Postcard from '../../../assets/graphic/postcard.png';


import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import './MainNavigation.scss';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };


  return (
    <React.Fragment>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <div className="main-navigation__title">
          <Link to="/">
            <img src={Postcard} className="main-navigation__logo-img" data-test="logo-img" />
            <div>PostCard</div>
          </Link>
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
}

export default MainNavigation;