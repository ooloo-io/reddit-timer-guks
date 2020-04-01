import React from 'react';
import {
  FooterWrapper,
  FooterLinkContainer,
  Logo,
  Anchor,
  Link,
} from './Footer.styles';


const Footer = () => (
  <FooterWrapper>
    <FooterLinkContainer>
      <Anchor href="https://ooloo.io" target="_blank" rel="noopener noreferrer">
        ooloo.io
      </Anchor>
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
