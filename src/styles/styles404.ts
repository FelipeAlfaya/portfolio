import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 92vh;
  margin: 0;
  z-index: 9;

  @media (max-width: 500px) {
    width: 650px;
    height: 100vh;
  }
`

export const Text = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 700;
  transition: 0.2s;
  cursor: pointer;
  z-index: 10;
  letter-spacing: 0.1rem;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  &:active {
    opacity: 0.7;
  }
`

export const BigText = styled.a`
  font-size: 10rem;
  font-weight: 700;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 0.5em ${({ theme }) => theme.secondary},
    0 0 0.1em ${({ theme }) => theme.secondary};
`

export const TextContainer = styled.div`
  display: grid;
  place-items: center;
  flex-direction: column;
  user-select: none;

  > h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }
`
