import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px;

  > h1 {
    margin-top: 5rem;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
    text-shadow: 0 0 0.5em ${({ theme }) => theme.secondary},
      0 0 0.1em ${({ theme }) => theme.secondary};
    gap: 1rem;
    font-size: 3.5rem;
    user-select: none;
  }

  > h2 {
    z-index: -1;
    position: absolute;
    margin-top: 3.5rem;
    margin-left: 0.8rem;
    font-weight: 300;
    font-size: 7rem;
    color: ${({ theme }) => theme.textDark};
    opacity: 0.2;
    font-style: italic;
    user-select: none;
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: 3rem;
    }

    > h2 {
      font-size: 5rem;
    }
  }

  @media (max-width: 680px) {
    > h1 {
      font-size: 2.5rem;
    }

    > h2 {
      font-size: 4.5rem;
    }
  }
`
