import { ReactNode } from 'react'
import * as C from './styles'

interface InputProps {
  children: ReactNode
}

export function Input({ children }: InputProps) {
  return (
    <C.Container>
      <h1>Input</h1>
      {children}
    </C.Container>
  )
}
