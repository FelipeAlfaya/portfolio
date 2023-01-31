import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  place-items: center;
  /* align-items: center;
  flex-direction: column; */
  margin-top: 23rem;
  height: 92vh;
  margin: 0;
  z-index: 9;
  text-align: center;

  @media (max-width: 500px) {
    margin-left: 9rem;
  }
`

export const Text = styled.a`
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
  display: flex;
  align-items: center;
  flex-direction: column;
  user-select: none;

  > h1 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }
`
