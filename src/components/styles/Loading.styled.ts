import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.primary};
  opacity: 0;
  animation: ${fadeIn} 2s ease-in forwards;
`;

export const LoadingText = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  margin-top: 2rem;
`;

export const HackerText = styled.div`
  font-family: "Courier New", Courier, monospace;
  font-size: 0.6rem;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  animation: ${fadeIn} 3s ease-in forwards;
`;
