import React from 'react';
import { SpinnerWrapper } from './Spinner.styles';
import { ReactComponent as SpinnerSVG } from './loading-spinner.svg';

const Spinner = () => (
  <SpinnerWrapper>
    <SpinnerSVG aria-label="spinner" />
  </SpinnerWrapper>
);

export default Spinner;
