import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const InputWrapper = styled.input`
  width: 352px;
  height: 34px;
  border-radius: 2px;
  border: solid 1px ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.grayLight};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 14px;
  color:  ${({ theme }) => theme.colors.grayDark};
  padding-left: 16px;
  margin-left: 10px;
  margin-right: 10px;
`;
