import { rem } from 'polished'
import styled from 'styled-components'

export const ParticlesContainer = styled('div')`
  height: 100vh;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
  z-index: 0;
`

export const Loader = styled('div')`
  position: absolute;
  top: calc(50% - ${rem(75)});
  left: calc(50% - ${rem(75)});
  z-index: 15;
`

export const ParticlesOverlay = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
`

export const ParticlesOverlayContent = styled('div')`
  position: relative;
  z-index: 15;
  width: 100%;
  height: 100%;
`
