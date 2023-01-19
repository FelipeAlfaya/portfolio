import * as C from './styles'
import { BiMailSend } from 'react-icons/bi'

export function Contact() {
  return (
    <C.Container>
      <C.TitleContainer>
        <h1>Get in Touch</h1>
        <h2>
          Get in Touch <BiMailSend />
        </h2>
      </C.TitleContainer>
    </C.Container>
  )
}
