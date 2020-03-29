import styled from 'styled-components';
import { ReactComponent as LogoSVG } from './sign.svg';

export const FooterWrapper = styled.footer`
  height: ${({ theme }) => theme.sizes.footerHeight};
  display: flex;
  justify-content: space-between;
  margin-right: 251px;
  margin-left: 251px;
`;

export const FooterLinkContainer = styled.span`
  display: flex;
  align-self: center;
  font-size: 14px;
`;

export const Logo = styled(LogoSVG)`
  width: 36px;
  height: 36px;
  padding-left: 57px;
  margin-bottom: -3px;
`;
