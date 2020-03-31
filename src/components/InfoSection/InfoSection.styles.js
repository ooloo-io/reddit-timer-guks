import styled from 'styled-components';

export const InfoSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 127px;
  margin-bottom: 2px;
`;

export const Info = styled.div`
  display: flex;
  width: 738px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${({ theme }) => theme.colors.grayBase};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: 0.03px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.grayDark};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 24px;
  font-weight: normal;
  margin: 0 0 8px 1px;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 9px;
  list-style-type: "· ";
`;

export const Body = styled.div`
  margin: 0 0 98px 1px;
`;
