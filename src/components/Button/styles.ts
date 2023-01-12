import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 3rem;
  width: 50%;
  margin: 10px 7px;
  padding: 5px 5px;
  border: 2px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;
  outline: 0;
  z-index: 1;
  background: none;
  overflow: hidden;
  transition: 0.3s ease-in;
  user-select: none;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.white}};
  }

  &:before {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.primary};
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    -webkit-transition: top 0.2s ease-in;
  }

  &:hover:before {
    top: 0;
  }

  &:active {
    opacity: 0.7;
  }

  a {
    color: ${({ theme }) => theme.text};
    font-size: 14px;
  }

  @media (max-width: 768px) {
    a {
      font-size: 12px;
    }
  }
`
