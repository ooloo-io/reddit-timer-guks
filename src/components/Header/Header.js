import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, LogoContainer } from './Header.styles';
import Navbar from '../Navbar/Navbar';

const Header = () => (
  <HeaderWrapper>
    <LogoContainer>
      <Link to="/">
        <Logo />
      </Link>
    </LogoContainer>
    <Navbar />
  </HeaderWrapper>
);

export default Header;
