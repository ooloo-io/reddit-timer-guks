import styled, { keyframes } from 'styled-components';
import { ReactComponent as SpinnerSVG } from './loading-spinner.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  animation: ${rotate} 1.5s linear infinite;
  padding: 2rem 1rem;
  width: 71px;
  height: 71px;
  margin-top: 23px;
`;

export const SpinnerImage = styled(SpinnerSVG)`
  width: 71px;
  height: 71px;
`;
