import styled from 'styled-components'

interface ContainerProps {
  imgUrl: string
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    background: #fff;
    background: url(${(props) => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 10rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 10px;
    transition: 0.3s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    border: 2px solid ${({ theme }) => theme.secondary};

    &:hover {
      transform: translateY(-5px);
      border: 2px solid ${({ theme }) => theme.primary};
      transition: 0.3s;
      div.overlay {
        opacity: 0.3;
      }
    }

    > section {
      z-index: 1;
      > h1 {
        color: ${({ theme }) => theme.background};
      }

      > h2 {
        color: ${({ theme }) => theme.background};
        font-weight: 300;
        font-size: 1rem;
      }
    }

    > div.overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.7;
      transition: all 0.2s;
    }
  }
`
