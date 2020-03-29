import React from 'react';
import PropTypes from 'prop-types';
import { CTAButtonStyled } from './CTAButton.styles';

const CTAButton = ({ cta, type }) => (
  <CTAButtonStyled type={type}>{cta}</CTAButtonStyled>
);

export default CTAButton;

CTAButton.propTypes = {
  cta: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
