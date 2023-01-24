import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5rem;
  margin-right: 15px;
  border-radius: 10px;
  /* border: 0.5px solid ${({ theme }) => lighten(0.2, theme.background)}; */

  @media (max-width: 390px) {
    width: 123%;
  }
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

export const FormContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  min-width: 300px;
  flex-flow: row wrap;

  > form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: stretch;
    width: 100%;
    max-width: 500px;
    margin: 5px;
  }

  > form > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  > form > span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  > form > div > input {
    min-height: 50px;
    min-width: 110px;
    flex-direction: column;
    width: 100%;
    padding: 10px;
    margin: 5px;
    border: 1px solid ${({ theme }) => lighten(0.2, theme.background)};
    border-radius: 5px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    transition: 0.2s;
  }

  > form > div > input:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  > form > span > textarea {
    width: 100%;
    padding: 10px;
    height: 112px;
    margin: 5px;
    min-width: 110px;
    border: 1px solid ${({ theme }) => lighten(0.2, theme.background)};
    border-radius: 5px;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-size: 1.2rem;
    transition: 0.2s;
  }

  > form > span > textarea:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  @media (max-width: 666px) {
    > form > input {
      font-size: 1rem;
    }

    > textarea {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    > form > input,
    textarea {
      font-size: 0.8rem;
    }
  }
`
