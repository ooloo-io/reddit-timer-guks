import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../CTAButton/CTAButton';
import {
  HeroSectionWrapper,
  HeroSectionTitle,
  HeroSectionP,
  HeroSectionButtonLinkWrapper,
  Table,
  TableContainer,
} from './HeroSection.styles';

const HeroSection = () => (
  <HeroSectionWrapper>
    <HeroSectionTitle>No reactions to your reddit posts?</HeroSectionTitle>
    <HeroSectionP>
      Great timing, great results! Find the best time to post on your subreddit.
    </HeroSectionP>
    <HeroSectionButtonLinkWrapper to="/search?q=javascript">
      <CTAButton type="button" cta="SHOW ME THE BEST TIME" />
    </HeroSectionButtonLinkWrapper>
    <HeroSectionP>
      r/javascript
    </HeroSectionP>
    <TableContainer><Link to="/search"><Table /></Link></TableContainer>
  </HeroSectionWrapper>
);

export default HeroSection;
