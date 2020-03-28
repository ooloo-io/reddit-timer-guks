import styled from 'styled-components';

import { ReactComponent as LogoSVG } from '../../assets/images/logo.svg';

export const HeaderWrapper = styled.header`
  height: ${({ theme }) => theme.sizes.headerHeight};
  display: flex;
  justify-content: space-between;
  margin-right: 80px;
  margin-left: 80px;
`;
export const LogoContainer = styled.span`
  display: flex;
  align-self: center;
`;

export const Logo = styled(LogoSVG)`
  width: 150px;
  height: 36px;
`;
