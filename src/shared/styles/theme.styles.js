import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  colors: {
    primary: '#636363',
    grayDark: '#00000',
    grayLight: '#ffffff',
    grayBase: '#93918f',
  },
  fonts: {
    primary: 'Montserrat',
    secondary: 'Bitter',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
