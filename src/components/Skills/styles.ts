import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px;
  margin-top: -10px;
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
`

export const SkillsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direciton: row;
  flex-wrap: wrap;
  gap: 4rem;
  user-select: none;
  position: relative;
`

export const Skill = styled.span`
  width: 21rem;
  height: 11.2rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;

  > img {
    content: '';
    position: absolute;
    display: flex;
    width: 20rem;
    height: 10.4rem;
    margin: 5px;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    border-radius: 10px;

    &:hover {
      content: 'test';
      transform: scale(1.1);
      opacity: 0.4;
    }

    &:not(:hover) {
      opacity: 1;
    }
  }
`

export const TextContainer = styled.section`
  > p {
    color: ${({ theme }) => theme.text};
    font-size: 1.5rem;
    margin: 5px;
    margin-top: -10px;
    padding: 5px;
  }
`
