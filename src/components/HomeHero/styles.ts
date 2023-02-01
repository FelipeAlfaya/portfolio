import { lighten, opacify } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
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

  @media (max-width: 666px) {
    > img {
      width: 18rem;
      height: 18rem;
    }
  }

  @media (max-width: 600px) {
    position: relative;
    padding: 0;
    gap: 0;

    > img {
      width: 13rem;
      height: 13rem;
    }
  }

  @media (max-width: 500px) {
    > img {
      width: 13rem;
      height: 13rem;
    }
  }

  @media (max-width: 460px) {
    flex-direction: column-reverse;

    > img {
      width: 10rem;
      height: 10rem;
    }
  }
`

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    margin-left: 7px;
    font-size: 3.5rem;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px ${({ theme }) => lighten(0.2, theme.header)};
    gap: 1rem;
  }

  > h2 {
    margin-left: 7px;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.text};
  }

  > h3 {
    margin-left: 7px;
    font-size: 2rem;
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 1000px) {
    margin-left: 7px;
    > h1 {
      margin-left: 7px;
      font-size: 3rem;
    }

    > h2 {
      margin-left: 7px;
      font-size: 2rem;
    }

    > h3 {
      margin-left: 7px;
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: 2.5rem;
    }

    > h2 {
      font-size: 1.8rem;
    }

    > h3 {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    margin: 0;

    > h1 {
      font-size: 1.8rem;
    }

    > h2 {
      font-size: 1.3rem;
    }

    > h3 {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 460px) {
    margin: 0;
    display: grid;
    place-items: center;
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

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
    font-size: 1.8rem;
  }

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
  align-items: start;
  /* justify-content: center; */

  @media (max-width: 1450px) {
    padding-top: 5rem;
  }

  @media (max-width: 768px) {
    padding-top: 2rem;
  }

  @media (max-width: 666px) {
    padding: 1rem;
  }
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
