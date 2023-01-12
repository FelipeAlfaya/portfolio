import { lighten, opacify } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;
  margin-top: 5rem;
  border-bottom: 1px solid ${({ theme }) => lighten(0.2, theme.background)};

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  > img {
    width: 40rem;
    height: 40rem;
    flex: 1;
    user-select: none;
    animation: float 6s ease-in-out infinite;
  }

  > div {
    flex: 4;
  }

  @media (max-width: 1450px) {
    > img {
      width: 30rem;
      height: 30rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 25rem;
      height: 25rem;
    }

    > div {
      flex: 1;
    }
  }

  @media (max-width: 768px) {
    > img {
      width: 22rem;
      height: 22rem;
    }

    > div {
      flex: 1;
    }
  }
`

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > h1 {
    font-size: 3.5rem;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px ${({ theme }) => lighten(0.2, theme.header)};
    gap: 1rem;
  }

  > h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.text};
  }

  > h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 1000px) {
    > h1 {
      font-size: 3rem;
    }

    > h2 {
      font-size: 2rem;
    }

    > h3 {
      width: 200px;
      font-size: 1.2rem;
    }
  }
`

export const Social = styled.button`
  width: 4rem;
  height: 4rem;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.background};
  box-shadow: 0 2px 8px 0 ${({ theme }) => opacify(0.1, theme.tertiary)};
  backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: 0.3s;
  font-size: 2.6rem;
  padding: 6px;

  &:hover {
    opcaity: 0.7;
    scale: 1.1;
  }

  &:active {
    opacity: 0.5;
  }
`

export const SocialContainer = styled.div`
  padding-top: 10rem;
  gap: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Howdy = styled.div`
  > h2 {
    position: absolute;
    top: 14rem;
    margin-left: 0.8rem;
    font-weight: 300;
    font-size: 4rem;
    color: ${({ theme }) => theme.textDark};
    opacity: 0.2;
    font-style: italic;
    user-select: none;
  }
`
