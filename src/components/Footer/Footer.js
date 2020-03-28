import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/sign.svg';
import { FooterWrapper, FooterLinkContainer, LogoContainer } from './Footer.styles';


const Footer = () => (
  <FooterWrapper>
    <FooterLinkContainer>
      <a href="https://ooloo.io" target="_blank" rel="noopener noreferrer">
        ooloo.io
      </a>
    </FooterLinkContainer>
    <FooterLinkContainer>
      <Link to="/">
        <LogoContainer src={Logo} />
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
