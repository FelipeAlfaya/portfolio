//banners
import bannerRT from '../../assets/react.svg'
import bannerTS from '../../assets/typescript.svg'
import bannerJS from '../../assets/Javascript.svg'
import bannerAG from '../../assets/angularJS.svg'
import bannerNT from '../../assets/next.svg'
import bannerND from '../../assets/node.svg'
import bannerSC from '../../assets/styledcomp.svg'
import bannerHT from '../../assets/html.svg'
import bannerCS from '../../assets/css.svg'
import bannerSS from '../../assets/sass.svg'
import bannerTW from '../../assets/tailwind.svg'
import bannerfg from '../../assets/figma.svg'

//styles
import Image from 'next/image'
import * as C from './styles'
import { GiComputing } from 'react-icons/gi'
import Button from '../Button'
import { useState } from 'react'

export function Skills() {
  const [isHidden, setIsHidden] = useState(true)
  const text = isHidden ? 'Read More' : 'Read Less'

  const handleReadMore = (): void => {
    setIsHidden(!isHidden)
    const container = document.getElementById('container')
    if (isHidden) {
      container?.classList.add('show')
      container?.classList.remove('fadeout')
    } else {
      container?.classList.add('fadeout')
      setTimeout(() => {
        container?.classList.remove('show')
      }, 900)
    }
  }

  return (
    <>
      <C.Container>
        <C.TitleContainer>
          <h1>Skills</h1>
          <h2>
            Skills <GiComputing />
          </h2>
        </C.TitleContainer>
        <C.TextContainer>
          <p>So which technologies are in my domain?</p>
        </C.TextContainer>
        <hr />
        <C.SkillsContainer>
          <C.Skill>
            <Image src={bannerTS} width={100} height={100} alt='' />
            <a>TypeScript</a>
            <a>Experience: 2 years</a>
          </C.Skill>
          <C.Skill>
            <Image src={bannerJS} width={100} height={100} alt='' />
            <a>JavaScript</a>
            <a>Experience: 2 years</a>
          </C.Skill>
          <C.Skill>
            <Image src={bannerHT} width={100} height={100} alt='' />
            <a>HTML</a>
            <a>Experience: 2 years</a>
          </C.Skill>
          <C.Skill>
            <Image src={bannerCS} width={100} height={100} alt='' />
            <a>CSS</a>
            <a>Experience: 2 years</a>
          </C.Skill>
          <C.Skill>
            <Image src={bannerAG} width={100} height={100} alt='' />
            <a>Angular</a>
            <a>Experience: 1.5 years</a>
          </C.Skill>
          <C.Skill>
            <Image src={bannerRT} width={100} height={100} alt='' />
            <a>React</a>
            <a>Experience: 1 year</a>
          </C.Skill>
        </C.SkillsContainer>
        <C.HiddenContainer id='container'>
          <C.SkillsContainer>
            <C.Skill>
              <Image src={bannerSS} width={100} height={100} alt='' />
              <a>Sass</a>
              <a>Experience: 1.5 years</a>
            </C.Skill>
            <C.Skill>
              <Image src={bannerfg} width={100} height={100} alt='' />
              <a>Figma</a>
              <a>Experience: 1.5 years</a>
            </C.Skill>
            <C.Skill>
              <Image src={bannerND} width={100} height={100} alt='' />
              <a>Node</a>
              <a>Experience: 7 months</a>
            </C.Skill>
            <C.Skill>
              <Image src={bannerSC} width={100} height={100} alt='' />
              <a>Styled Components</a>
              <a>Experience: 6 months</a>
            </C.Skill>
            <C.Skill>
              <Image src={bannerNT} width={100} height={100} alt='' />
              <a>Next</a>
              <a>Experience: 6 months</a>
            </C.Skill>
            <C.Skill>
              <Image src={bannerTW} width={100} height={100} alt='' />
              <a>Tailwind</a>
              <a>Experience: 6 months</a>
            </C.Skill>
          </C.SkillsContainer>
        </C.HiddenContainer>
        <Button onClick={handleReadMore}>
          <a>{text}</a>
        </Button>
      </C.Container>
    </>
  )
}
