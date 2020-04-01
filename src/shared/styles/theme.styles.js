import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = {
  colors: {
    primary: '#636363',
    grayDark: '#000000',
    grayLight: '#ffffff',
    grayBase: '#93918f',
    grayPrefix: '#9e9e9e',
    buttonBg: '#fdb755',
    buttonBgEffect: '#fca223',
    link: '#0087ff',
    border: '#e6e6e6',
  },
  fonts: {
    primary: 'Montserrat',
    secondary: 'Bitter',
  },
  sizes: {
    headerHeight: '100px',
    footerHeight: '100px',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
