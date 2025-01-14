import styled from "styled-components";

export const LoadingWrapper = styled.div<{ isExiting?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors?.body};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 1.5s ease-out;
  opacity: ${props => (props.isExiting ? "0" : "1")};
`;
