import { lighten } from 'polished'
import styled from 'styled-components'

export const Supercontainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => lighten(0.2, theme.background)};
  padding: 5px;
  margin: 10px;
`

export const Text = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5px;
  margin-top: -10px;

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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 20rem;
    height: 20rem;
    flex: 1;
    user-select: none;
    padding: 5px;
  }

  @media (max-width: 1000px) {
    margin: 1rem;
    > img {
      width: 15rem;
      height: 15rem;
      flex: 1;
    }
  }

  @media (max-width: 666px) {
    flex-direction: column;
  }
`

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  margin: 3rem;
  color: ${({ theme }) => theme.text};

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
    margin-top: -11.3rem;
    margin-left: 5rem;
    font-weight: 300;
    font-size: 4rem;
    color: ${({ theme }) => theme.textDark};
    opacity: 0.2;
    font-style: italic;
    user-select: none;
  }

  @media (max-width: 1000px) {
    width: 100%;
    margin: 3rem;
    align-items: center;

    > h1 {
      font-size: 3rem;
    }

    > h2 {
      font-size: 3.5rem;
      margin-top: -13rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;

    > h1 {
      font-size: 3rem;
    }

    > h2 {
      font-size: 3.5rem;
      margin-top: -13.5rem;
    }
  }

  @media (max-width: 666px) {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;

    > h1 {
      font-size: 2rem;
    }

    > h2 {
      font-size: 2.5rem;
      margin-top: -9rem;
      maring-left: 0.5rem;
    }

    > p {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    > h1 {
      font-size: 2rem;
    }

    > h2 {
      font-size: 2.5rem;
      margin-top: -20rem;
      maring-left: 0.5rem;
    }
  }
`
