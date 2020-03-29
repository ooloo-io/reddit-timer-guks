import styled from 'styled-components';
import TablePNG from './table.png';

export const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeroSectionTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 38px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin-top: 25px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.grayDark};
`;

export const HeroSectionP = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  margin-bottom: 15px;
  margin-left: 2px;
  color: ${({ theme }) => theme.colors.grayBase};
}
`;

export const HeroSectionButtonWrapper = styled.div`
  margin-top: 31px;
  margin-bottom: 30px;
  margin-left: 2px;
`;

export const TableContainer = styled.div`
  display: flex;
  align-self: center;
`;

export const Table = styled.div`
  background-image: url(${TablePNG});
  width: 1114px;
  height: 332px;
  margin-top: 21px;
`;
