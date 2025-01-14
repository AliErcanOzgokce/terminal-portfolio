import styled, { keyframes } from "styled-components";

interface ThemeType {
  theme: {
    colors?: {
      primary: string;
      secondary: string;
    };
  };
}

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;

  @media (max-width: 932px) {
    margin-bottom: 1.5rem;
  }

  div {
    @media (min-width: 1024px) {
      flex-basis: 50%;
    }
  }
`;

export const PreName = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const PreWrapper = styled.div`
  text-align: center;
`;

export const PreNameMobile = styled.pre`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 0.7rem;
  white-space: pre;
  overflow-x: hidden;

  @media (min-width: 550px) {
    display: none;
  }
`;

const flicker = keyframes`
  0%, 41%, 45%, 47%, 73%, 75%, 100% {
    opacity: 1;
    text-shadow: 
      0 0 7px var(--primary),
      0 0 10px var(--primary),
      0 0 21px var(--primary);
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

export const PreImg = styled.pre<ThemeType>`
  color: ${({ theme }) => theme.colors?.primary};
  animation: ${flicker} 4s infinite;
  font-size: 1.1rem;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const PreImgMobile = styled.pre<ThemeType>`
  color: ${({ theme }) => theme.colors?.primary};
  animation: ${flicker} 4s infinite;
  font-size: 0.55rem;
  white-space: pre;
  overflow-x: hidden;
  max-width: 100%;
  display: none;

  @media (max-width: 550px) {
    display: block;
    transform: scale(0.9);
    transform-origin: left;
    margin-left: -10px;
  }
`;

export const Seperator = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

export const Cmd = styled.span<ThemeType>`
  color: ${({ theme }) => theme.colors?.primary};
  text-shadow: 0 0 7px ${({ theme }) => theme.colors?.primary},
    0 0 10px ${({ theme }) => theme.colors?.primary};
`;

export const Link = styled.a<ThemeType>`
  color: ${({ theme }) => theme.colors?.secondary};
  text-decoration: none;
  line-height: 1.5rem;
  white-space: nowrap;
  border-bottom: 2px dashed ${({ theme }) => theme.colors?.secondary};
  text-shadow: 0 0 7px ${({ theme }) => theme.colors?.secondary},
    0 0 10px ${({ theme }) => theme.colors?.secondary};

  &:hover {
    border-bottom-style: solid;
    text-shadow: 0 0 7px ${({ theme }) => theme.colors?.secondary},
      0 0 10px ${({ theme }) => theme.colors?.secondary},
      0 0 21px ${({ theme }) => theme.colors?.secondary},
      0 0 42px ${({ theme }) => theme.colors?.secondary};
  }
`;

export const NeonText = styled.span<ThemeType>`
  color: ${({ theme }) => theme.colors?.primary};
  text-shadow: 0 0 7px ${({ theme }) => theme.colors?.primary},
    0 0 10px ${({ theme }) => theme.colors?.primary},
    0 0 21px ${({ theme }) => theme.colors?.primary},
    0 0 42px ${({ theme }) => theme.colors?.primary};
`;

export const PurpleSpan = styled.span<ThemeType>`
  color: ${({ theme }) => theme.colors?.secondary};
  text-shadow: 0 0 7px ${({ theme }) => theme.colors?.secondary},
    0 0 10px ${({ theme }) => theme.colors?.secondary},
    0 0 21px ${({ theme }) => theme.colors?.secondary},
    0 0 42px ${({ theme }) => theme.colors?.secondary};
  font-weight: bold;
  animation: none;
`;

export const Spacer = styled.div`
  height: 1rem;
`;
