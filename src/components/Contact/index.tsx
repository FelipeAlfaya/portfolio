import { useState } from 'react'
import Button from '../Button'
import * as C from './styles'
import { BiMailSend } from 'react-icons/bi'
import { sendContactEmail } from '../../services/sendMail'
import toast, { Toaster } from 'react-hot-toast'

export function Contact() {
  const [nome, setNome] = useState('')
  const [senderMail, setSenderMail] = useState('')
  const [content, setContent] = useState('')

  async function handleSubmit(event: any) {
    event.preventDefault()
    console.log(nome, senderMail, content)
    if (nome === '' || senderMail === '' || content === '') {
      toast('Please fill all the fields.', {
        position: 'bottom-right',
        icon: '⚠',
        style: {
          backgroundColor: '#f1852d',
          color: '#D9D9D9',
        },
      })
      return
    }
    try {
      await sendContactEmail(nome, senderMail, content)
      setNome('')
      setSenderMail('')
      setContent('')
      toast('Message sent successfully!', {
        position: 'bottom-right',
        icon: '✔',
        style: {
          backgroundColor: '#04c714',
          color: '#D9D9D9',
        },
      })
    } catch {
      toast.error('Error sending message. Please try again later.')
    }
  }

  return (
    <C.Container>
      <C.TitleContainer>
        <h1>Send a Message!</h1>
        <h2>
          Liked my profile? <BiMailSend />
        </h2>
      </C.TitleContainer>
      <C.FormContainer>
        <form data-aos='fade-up' onSubmit={handleSubmit}>
          <div>
            <input
              type='text'
              value={nome}
              placeholder='Name'
              onChange={({ target }) => setNome(target.value)}
            ></input>

            <input
              type='email'
              value={senderMail}
              placeholder='Your E-mail'
              onChange={({ target }) => setSenderMail(target.value)}
            ></input>
          </div>
          <span>
            <textarea
              value={content}
              onChange={({ target }) => setContent(target.value)}
              placeholder='Send me a Message'
            ></textarea>
          </span>
          <Button color='#fff'>
            <button type='submit' value='Send'>
              Send
            </button>
          </Button>
          <Toaster />
        </form>
      </C.FormContainer>
    </C.Container>
  )
}
