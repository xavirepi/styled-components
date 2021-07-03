import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

// It could be modularized into an external directory but it'd only make sense if this component would be used somewhere else.
// As it's not the case it is styled here in the same file.
const AppHeader = styled.header`
  background: #282c34;
  padding: 10px 5%;
  .logo {
    width: 60px;
  }
`

const Header = () => {
  return (
    <AppHeader>
      <img src={logo} alt='logo' className="logo"/>
    </AppHeader>
  )
}

export default Header;
