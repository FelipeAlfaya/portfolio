import { Container } from './styles'

type ButtonProps = {
  children: React.ReactNode
  title: string
  color?: string
}

const Button = (props: ButtonProps) => {
  return (
    <Container>
      <button>{props.title}</button>
      {props.children}
    </Container>
  )
}

export default Button
