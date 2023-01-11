import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  > main {
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }

  > body {
    background: ${({ theme }) => theme.background};
    height: 180vh;
  }
`
