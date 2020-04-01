import React from 'react';
import {
  FooterWrapper,
  FooterLinkContainer,
  Logo,
  Link,
} from './Footer.styles';


const Footer = () => (
  <FooterWrapper>
    <FooterLinkContainer>
      <Link as="a" href="https://ooloo.io" target="_blank" rel="noopener noreferrer">
        ooloo.io
      </Link>
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
