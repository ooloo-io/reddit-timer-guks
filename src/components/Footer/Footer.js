import React from 'react';
import {
  FooterWrapper,
  FooterLinkContainer,
  Logo,
  StyledA,
  StyledLink,
} from './Footer.styles';


const Footer = () => (
  <FooterWrapper>
    <FooterLinkContainer>
      <StyledA href="https://ooloo.io" target="_blank" rel="noopener noreferrer">
        ooloo.io
      </StyledA>
    </FooterLinkContainer>
    <FooterLinkContainer>
      <StyledLink to="/">
        <Logo />
      </StyledLink>
    </FooterLinkContainer>
    <FooterLinkContainer>
      <StyledLink to="/terms">
        Terms & Privacy
      </StyledLink>
    </FooterLinkContainer>
  </FooterWrapper>
);

export default Footer;
