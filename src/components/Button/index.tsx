import * as C from './styles'

type ButtonProps = {
  children: React.ReactNode
  link?: string
  color?: string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  return (
    <C.Container onClick={props.onClick} color={props.color}>
      <>{props.children}</>
    </C.Container>
  )
}

export default Button
