import styled from 'styled-components'
import { lighten, modularScale } from 'polished'

interface NavLinkProps {
  isActive: boolean
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => lighten(0.2, theme.header)};
  background: ${({ theme }) => theme.header};
  box-shadow: 0 8px 32px 0 rgba(10, 10, 10, 0.37);

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${(props) =>
      props.isActive ? props.theme.secondary : props.theme.text};
    text-weight: 700;
    transition: 0.3s;
  }

  &:after {
    display: block;
    content: '';
    border-bottom: solid 1.5px ${({ theme }) => theme.secondary};
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
  }

  &:hover:after {
    transform-origin: 0% 50%;
    transform: scaleX(1);
  }

  &:hover a {
    color: ${({ theme }) => theme.secondary};
  }
`
