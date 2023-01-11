import art from '../../assets/PixelArt 2.svg'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

import * as C from './styles'

export function HomeHero() {
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
                delay: 75,
              }}
            />
          </h3>
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
