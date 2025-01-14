import styled from "styled-components";

export const HelpWrapper = styled.div`
  margin-top: 0.25rem;
  margin-bottom: 0.75rem;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.colors?.primary};
  margin-bottom: 1rem;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
`;

export const Cmd = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
  text-shadow: 0 0 7px ${({ theme }) => theme.colors?.primary},
    0 0 10px ${({ theme }) => theme.colors?.primary},
    0 0 21px ${({ theme }) => theme.colors?.primary};
  font-size: 0.85rem;
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.colors?.secondary};
  text-shadow: 0 0 7px ${({ theme }) => theme.colors?.secondary},
    0 0 10px ${({ theme }) => theme.colors?.secondary};
  font-size: 0.85rem;
`;

export const Key = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
  text-shadow: 0 0 7px ${({ theme }) => theme.colors?.primary},
    0 0 10px ${({ theme }) => theme.colors?.primary};
  font-size: 0.85rem;
`;

export const TabSpace = styled.span<{ tab: number }>`
  margin-left: ${({ tab }) => tab * 0.5}rem;
`;

export const Seperator = styled.div`
  color: ${({ theme }) => theme.colors?.primary};
  margin: 1rem 0;
`;
