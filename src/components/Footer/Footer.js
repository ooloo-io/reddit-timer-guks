import React from 'react';
import { Link } from 'react-router-dom';
import { FooterWrapper, FooterLinkContainer, Logo } from './Footer.styles';


const Footer = () => (
  <FooterWrapper>
    <FooterLinkContainer>
      <a href="https://ooloo.io" target="_blank" rel="noopener noreferrer">
        ooloo.io
      </a>
    </FooterLinkContainer>
    <FooterLinkContainer>
      <Link to="/">
        <Logo />
      </Link>
    </FooterLinkContainer>
    <FooterLinkContainer>
      <Link to="/terms">
        Terms & Privacy
      </Link>
    </FooterLinkContainer>
  </FooterWrapper>
);

export default Footer;
