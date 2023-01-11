import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15rem;
  margin-top: 5rem;

  > img {
    width: 40rem;
    height: 40rem;
    flex: 1;
  }

  > div {
    flex: 4;
  }
`

export const TextContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  > h1 {
    font-size: 4rem;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > h2 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.text};
  }

  > h3 {
    font-size: 3rem;
    color: ${({ theme }) => theme.text};
  }
`
