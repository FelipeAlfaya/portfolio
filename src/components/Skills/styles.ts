import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px;
  /* margin: 10px; */
  /* margin-top: -10px; */
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
  gap: 16px;
  user-select: none;
  position: relative;
`

export const Skill = styled.span`
  width: 19.9rem;
  height: 10.4rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  padding: 5px;
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
    margin: 3px;
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
