import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeroSectionWrapper,
  Title,
  SubLine,
  Button,
  HeatMap,
} from './HeroSection.styles';

const HeroSection = () => (
  <HeroSectionWrapper>
    <Title>No reactions to your reddit posts?</Title>
    <SubLine>
      Great timing, great results! Find the best time to post on your subreddit.
    </SubLine>
    <Button as={Link} to="/search?q=javascript">SHOW ME THE BEST TIME</Button>
    <SubLine>
      r/javascript
    </SubLine>
    <HeatMap as={Link} to="/search" />
  </HeroSectionWrapper>
);

export default HeroSection;
