//images
import art from '../../assets/PixelArt 2.svg'

//library
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { SlSocialInstagram } from 'react-icons/sl'
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

//styles
import * as C from './styles'
import Link from 'next/link'
import Button from '../Button'

export function HomeHero() {
  const handleScroll = () => {
    const element = document.getElementById('git')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <C.Container>
      <div>
        <C.TextContainer>
          <h1>Howdy</h1>
          <h2>I'm Alfaya</h2>
          <h3>
            <Typewriter
              options={{
                strings: ['A Web-developer!'],
                autoStart: true,
                loop: true,
                delay: 125,
                cursor: '_',
              }}
            />
          </h3>
          <Button color='#fff' onClick={handleScroll}>
            <a>Get in Touch</a>
          </Button>
          <C.SocialContainer>
            <C.Social>
              <a href='https://www.instagram.com/alfaaya/' target='_blank'>
                <SlSocialInstagram width={100} height={100} color={'#fff'} />
              </a>
            </C.Social>
            <C.Social>
              <a
                href='https://www.linkedin.com/in/felipealfaya/'
                target='_blank'
              >
                <FaLinkedin width={100} height={100} color={'#fff'} />
              </a>
            </C.Social>
            <C.Social>
              <a href='https://github.com/FelipeAlfaya' target='_blank'>
                <SiGithub width={100} height={100} color={'#fff'} />
              </a>
            </C.Social>
          </C.SocialContainer>
        </C.TextContainer>
      </div>
      <Image
        src={art}
        width={100}
        height={100}
        alt='Pixel art comissioned for me, made by: @Utinhaa'
      />
    </C.Container>
  )
}
