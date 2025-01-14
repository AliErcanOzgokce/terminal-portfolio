import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
`;

export const User = styled.span`
  color: ${({ theme }) => theme.colors?.secondary};
  text-shadow: 0 0 7px ${({ theme }) => theme.colors?.secondary},
    0 0 10px ${({ theme }) => theme.colors?.secondary};
`;

export const WebsiteName = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
  text-shadow: 0 0 7px ${({ theme }) => theme.colors?.primary},
    0 0 10px ${({ theme }) => theme.colors?.primary};
`;
