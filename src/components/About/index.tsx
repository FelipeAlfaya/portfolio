//syles
import * as C from './styles'

//icons
import { BsFillPersonFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

//images and Next
import art from '../../assets/PixelArt about.svg'
import Image from 'next/image'

export function About() {
  return (
    <>
      <C.Supercontainer>
        <C.Text>
          <h2>
            About <BsFillPersonFill />
          </h2>
          <h1>About me</h1>
        </C.Text>
        <C.Container>
          <Image src={art} width={100} height={100} alt='art' />
          <C.TextContainer>
            <h2>
              Profile <CgProfile />
            </h2>
            <h1>My Profile</h1>
            <p>
              I’m a self taught web-developer that focuses on developing web
              applications using Angular, React and NextJS. With the time and
              wish to gain more experience, I learnt NodeJS, Express and Restify
              to expand my mind to new horizons that I hadn't reached before. I
              have experience with figma and UI/UX as well.
            </p>
            <hr />
            <p>Location: Bahia, Brazil</p>
          </C.TextContainer>
        </C.Container>
      </C.Supercontainer>
    </>
  )
}
