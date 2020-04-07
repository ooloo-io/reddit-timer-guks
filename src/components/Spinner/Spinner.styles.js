import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// eslint-disable-next-line import/prefer-default-export
export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  animation: ${rotate} 1.5s linear infinite;
  padding: 2rem 1rem;
  margin-top: 23px;
`;
