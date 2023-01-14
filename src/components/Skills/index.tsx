//banners
import bannerRT from '../../assets/react.svg'
import bannerTS from '../../assets/typescript.svg'
import bannerJS from '../../assets/Javascript.svg'
import bannerAG from '../../assets/angularJS.svg'
import bannerNT from '../../assets/next.svg'
import bannerND from '../../assets/node.svg'

import Image from 'next/image'
import * as C from './styles'
import { GiComputing } from 'react-icons/gi'

export function Skills() {
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
            <Image src={bannerRT} width={100} height={100} alt='' />
            <a>React</a>
            <a>Experience: 1 year</a>
          </C.Skill>
          <C.Skill>
            <Image src={bannerTS} width={100} height={100} alt='' />
            <a>TypeScript</a>
            <a>Experience: 1.5 years</a>
          </C.Skill>
          <C.Skill>
            <Image src={bannerJS} width={100} height={100} alt='' />
            <a>JavaScript</a>
            <a>Experience: 2 years</a>
          </C.Skill>
          <C.Skill>
            <Image src={bannerAG} width={100} height={100} alt='' />
            <a>Angular</a>
            <a>Experience: 1.5 years</a>
          </C.Skill>
          <C.Skill>
            <Image src={bannerNT} width={100} height={100} alt='' />
            <a>Next</a>
            <a>Experience: 6 months</a>
          </C.Skill>
          <C.Skill>
            <Image src={bannerND} width={100} height={100} alt='' />
            <a>Node</a>
            <a>Experience: 7 months</a>
          </C.Skill>
        </C.SkillsContainer>
      </C.Container>
    </>
  )
}
