import React from 'react';
import {
  NavbarContainer,
  NavbarUl,
  NavbarLi,
  NavbarStyledLink,
} from './Navbar.styles';

const Navbar = () => (
  <NavbarContainer>
    <NavbarUl>
      <NavbarLi><NavbarStyledLink to="/search?q=javascript">Search</NavbarStyledLink></NavbarLi>
      <NavbarLi><NavbarStyledLink to="/#how-it-works">How it works</NavbarStyledLink></NavbarLi>
      <NavbarLi><NavbarStyledLink to="/#about">About</NavbarStyledLink></NavbarLi>
    </NavbarUl>
  </NavbarContainer>
);


export default Navbar;
