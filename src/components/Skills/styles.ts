import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => lighten(0.2, theme.background)};
`

export const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px;

  > h1 {
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0.5px ${({ theme }) => lighten(0.2, theme.header)};
    font-size: 3.5rem;
  }

  > h2 {
    z-index: -1;
    position: absolute;
    margin-top: -3.5rem;
    margin-left: 0.8rem;
    font-weight: 300;
    font-size: 4rem;
    color: ${({ theme }) => theme.textDark};
    opacity: 0.2;
    font-style: italic;
    user-select: none;
  }

  @media (max-width: 666px) {
    > h1 {
      font-size: 2.5rem;
    }

    > h2 {
      font-size: 3rem;
    }
  }
`

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  user-select: none;
  position: relative;
  margin: 8px;

  @media (max-width: 666px) {
    gap: 12px;
  }
`

export const Skill = styled.span`
  width: 19.9rem;
  height: 10.4rem;
  border-radius: 10px;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  flex-direction: column;
  cursor: pointer;
  z-index: 999;
  transition: 0.3s;

  > a {
    display: none;
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: 0.3s;
    margin: 5px;
    z-index: 1;
    font-weight: 300;
    transition: 0.3s;
  }

  > img {
    content: '';
    position: absolute;
    display: flex;
    width: 20rem;
    height: 10.4rem;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    border-radius: 10px;
  }

  &:hover {
    > a {
      display: block;
      transition: 0.3s;
      transform: scale(1.1);
    }

    > img {
      transform: scale(1.06);
      opacity: 0.4;
      display: block;
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`

export const TextContainer = styled.section`
  > p {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    margin-top: -10px;
    padding: 5px;
  }

  @media (max-width: 666px) {
    > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    > p {
      font-size: 0.8rem;
    }
  }
`

export const HiddenContainer = styled.div`
  display: none;
  transition: 0.3s;

  &.show {
    transition: 0.3s;
    display: block;
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;

    @-webkit-keyframes fadeInDown {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }

      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }

    @keyframes fadeInDown {
      0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -100%, 0);
        transform: translate3d(0, -100%, 0);
      }

      100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
      }
    }
  }

  &.fadeout {
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  @-webkit-keyframes fadeOutUp {
    0% {
      opacity: 1;
    }
    100% {
      display: none;
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }
  @keyframes fadeOutUp {
    0% {
      opacity: 1;
    }
    100% {
      display: none;
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }
`
