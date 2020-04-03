import React from 'react';
import {
  InfoSectionWrapper,
  Info,
  Title,
  List,
  Body,
} from './InfoSection.styles';

const InfoSection = () => (
  <InfoSectionWrapper>
    <Info id="how-it-works">
      <Title>How it works</Title>
      <Body>
        <List>
          <li> We find the 500 top posts from the past year for a subreddit.</li>
          <li> The data is visualized in a heatmap grouped by weekday and hour of the day.</li>
          <li> See immediately when to submit your reddit post.</li>
        </List>
      </Body>
    </Info>
    <Info id="about">
      <Title>About</Title>
      <Body>
        This app was created during a course on
        {' '}
        <a href="https://ooloo.io" target="_blank" rel="noopener noreferrer">ooloo.io</a>
        {' '}
        with the goal to implement a pixel-perfect
        real-world application with professional workflows and tools like Kanban, Asana, Zeplin,
        GitHub, pull requests and code reviews.
        {' '}
        <a href="https://ooloo.io" target="_blank" rel="noopener noreferrer">Click here for more information.</a>
      </Body>
    </Info>
  </InfoSectionWrapper>
);

export default InfoSection;
