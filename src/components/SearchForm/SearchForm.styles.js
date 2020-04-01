import styled from 'styled-components';

export const SearchFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin-top: 26px;
  margin-bottom: 0px;
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 28px;
`;

export const Prefix = styled.div`
  width: 18px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.5;
  letter-spacing: normal;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayPrefix};
`;

export const Input = styled.input`
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
