import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const CTAButton = styled.button`
  background: ${({ theme }) => theme.colors.buttonBg};
  color: white;
  text-decoration: none;  
  padding: 14px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 0.64;
  border: none;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonBgEffect};
  }
`;
