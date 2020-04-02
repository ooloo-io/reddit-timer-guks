import styled from 'styled-components';

export const SearchFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 24px;
  margin-bottom: 0px;
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
  color: ${({ theme }) => theme.colors.grayMediumLight};
`;
