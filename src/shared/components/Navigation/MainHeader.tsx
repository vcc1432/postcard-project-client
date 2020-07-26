import React from 'react';
import './MainHeader.scss';

export interface HeaderProps {
  children: string;
}


const MainHeader = (props: any) => {
  return <header className="main-header">{props.children}</header>
}

export default MainHeader;