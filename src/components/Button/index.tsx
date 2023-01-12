import * as C from './styles'

type ButtonProps = {
  children: React.ReactNode
  link?: string
  color?: string
}

const Button = (props: ButtonProps) => {
  return (
    <C.Container color={props.color}>
      <>{props.children}</>
    </C.Container>
  )
}

export default Button
