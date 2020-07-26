
import React from 'react';
import Postcard from './../../assets/graphic/postcard.png';

const Header = (props: any) => {
  return (
    <header data-test="headerComponent">
      <img src={Postcard} data-test="logoIMG" />
    </header>
  )
}

export default Header;