import { ReactNode } from 'react'

import * as C from './styles'

interface ModalProps {
  tech: string
  content: string
  title: string
  type: string
}

export function Modal(props: ModalProps) {
  return (
    <C.Container>
      <C.Content>
        <C.Header>
          <C.Title>
            <h4>{props.title}</h4>
          </C.Title>
        </C.Header>
        <C.Body>
          <C.Description>{props.content}</C.Description>
          <C.Technology>{props.tech}</C.Technology>
          <C.Type>{props.type}</C.Type>
        </C.Body>
      </C.Content>
    </C.Container>
  )
}
