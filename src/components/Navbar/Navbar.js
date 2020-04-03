import React from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  NavbarContainer,
  List,
  ListItem,
  Link,
} from './Navbar.styles';

const Navbar = () => (
  <NavbarContainer>
    <List>
      <ListItem><Link to="/search?q=javascript">Search</Link></ListItem>
      <ListItem><Link as={HashLink} to="/#how-it-works">How it works</Link></ListItem>
      <ListItem><Link as={HashLink} to="/#about">About</Link></ListItem>
    </List>
  </NavbarContainer>
);


export default Navbar;
