import styled, { keyframes } from "styled-components";

const brokenNeon = keyframes`
  0%, 41%, 45%, 47%, 73%, 75%, 100% {
    opacity: 1;
    text-shadow: 
      0 0 7px var(--primary),
      0 0 10px var(--primary),
      0 0 21px var(--primary),
      0 0 42px var(--primary);
  }
  42%, 44%, 46%, 74% {
    opacity: 0.4;
    text-shadow: none;
  }
  43% {
    opacity: 0.8;
    text-shadow: 
      0 0 7px var(--primary),
      0 0 10px var(--primary);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  padding: 1.25rem;
  padding-top: 0.75rem;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  animation: ${fadeIn} 2.5s ease-out;
`;

export const CmdNotFound = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 1rem;
`;

export const Empty = styled.div`
  margin-bottom: 0.25rem;
`;

export const MobileSpan = styled.span`
  line-height: 1.5rem;
  margin-right: 0.75rem;

  @media (min-width: 550px) {
    display: none;
  }
`;

export const MobileBr = styled.br`
  @media (min-width: 550px) {
    display: none;
  }
`;

export const Form = styled.form`
  @media (min-width: 550px) {
    display: flex;
  }
`;

export const Input = styled.input`
  flex-grow: 1;

  @media (max-width: 550px) {
    min-width: 85%;
  }
`;

export const Hints = styled.span`
  margin-right: 0.875rem;
`;

export const TerminalOutput = styled.div`
  --primary: ${({ theme }) => theme.colors?.primary};
  color: var(--primary);
  animation: ${brokenNeon} 3.5s infinite;
`;

export const TerminalInput = styled.span`
  color: ${({ theme }) => theme.colors?.secondary};
  animation: ${brokenNeon} 4.2s infinite;
`;

export const TerminalPrompt = styled.span`
  color: ${({ theme }) => theme.colors?.text[100]};
  animation: ${brokenNeon} 3.8s infinite;
`;

export const MusicButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors?.primary};
  font-family: "Courier New", Courier, monospace;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
  padding: 5px;
  text-shadow: 0 0 7px ${({ theme }) => theme.colors?.primary},
    0 0 10px ${({ theme }) => theme.colors?.primary},
    0 0 21px ${({ theme }) => theme.colors?.primary};
  transition: all 0.3s ease;
  letter-spacing: 1px;

  &:hover {
    transform: scale(1.1);
    text-shadow: 0 0 14px ${({ theme }) => theme.colors?.primary},
      0 0 20px ${({ theme }) => theme.colors?.primary},
      0 0 42px ${({ theme }) => theme.colors?.primary};
  }

  &:active {
    transform: scale(0.95);
  }
`;
