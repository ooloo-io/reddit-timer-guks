import styled from 'styled-components';
import HeatMapPNG from './table.png';
import CTAButton from '../CTAButton/CTAButton';

export const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  margin-top: 26px;
  margin-bottom: 4px;
`;

export const SubLine = styled.p`
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

export const Button = styled(CTAButton)`
  margin-top: 31px;
  margin-bottom: 30px;
  margin-left: 2px;
`;

export const HeatMap = styled.div`
  display: flex;
  align-self: center;
  background-image: url(${HeatMapPNG});
  width: 1114px;
  height: 332px;
  margin-top: 21px;
`;
