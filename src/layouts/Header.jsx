import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';
import { purple, social, elevation } from '../utils';

const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src={logo} alt='logo' className='logo' />
    </header>
  )
};

// It could be modularized into an external directory but it'd only make sense if this component would be used somewhere else.
// As it's not the case it is styled here in the same file.
// We can use elevation and select the elevation style specifying the array position.
export default styled(Header)`
  background: ${social.facebook};
  padding: 10px 5%;
  ${elevation[2]};
  .logo {
    width: 60px;
  }
`;