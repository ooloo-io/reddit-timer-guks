import React from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../CTAButton/CTAButton';
import {
  HeroSectionWrapper,
  HeroSectionTitle,
  HeroSectionP,
  HeroSectionButtonWrapper,
  Table,
  TableContainer,
} from './HeroSection.styles';

const HeroSection = () => (
  <HeroSectionWrapper>
    <HeroSectionTitle>No reactions to your reddit posts?</HeroSectionTitle>
    <HeroSectionP>
      Great timing, great results! Find the best time to post on your subreddit.
    </HeroSectionP>
    <HeroSectionButtonWrapper>
      <CTAButton type="button" cta="SHOW ME THE BEST TIME" />
    </HeroSectionButtonWrapper>
    <HeroSectionP>
      <Link to="/search?q=javascript">r/javascript</Link>
    </HeroSectionP>
    <TableContainer><Table /></TableContainer>
  </HeroSectionWrapper>
);

export default HeroSection;
