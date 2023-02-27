import styled from 'styled-components'

interface ContainerProps {
  imgUrl: string
}

export const Container = styled.div<ContainerProps>`
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
`

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.5;
  transition: 0.3s;
  user-select: none;

  > h3 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin: 20px 0 10px;
    line-height: 1.1em;
  }

  > span {
    font-size: 12px;
    font-wight: 300;
    text-transform: initial;
  }
`

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 1em;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  backdrop-filter: blur(40px);
  border: solid 2px transparent;
  background-clip: padding-box;
  box-shadow: 0 10px 10px rgba(46, 54, 68, 0.03);

  ul {
    position: absolute;
    bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    user-select: none;
    padding: 5px;
    gap: 5px;
  }

  li {
    margin: 0 10px;
    transform: translateY(40px);
    opacity: 0;
    transition: 0.3s;
    trabnsition-delay: calc(0.1s * var(--i));

    > a {
      font-size: 18px;
      color: ${({ theme }) => theme.primary};
    }
  }

  &:hover {
    ul {
      li {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    &:nth-child(1) {
      --i: 1;
    }
  }
`

export const Image = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 10px solid rgba(0, 0, 0, 0.25);
  user-select: none;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1em;
  text-align: center;
  z-index: 1;
`
