import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  margin: 0 auto;
`;

export const AppMainWrapper = styled.main`
  min-height: calc(100vh - ${({ theme }) => theme.sizes.headerHeight} - ${({ theme }) => theme.sizes.footerHeight})
`;
