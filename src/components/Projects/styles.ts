import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => lighten(0.2, theme.background)};
  padding: 5px;
  margin: 10px;
`

export const Title = styled.section`
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
