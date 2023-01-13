//banners
import bannerRT from '../../assets/react.svg'
import bannerTS from '../../assets/typescript.svg'
import bannerJS from '../../assets/javascript.svg'
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
          </C.Skill>
          <C.Skill>
            <Image src={bannerTS} width={100} height={100} alt='' />
          </C.Skill>
          <C.Skill>
            <Image src={bannerJS} width={100} height={100} alt='' />
          </C.Skill>
          <C.Skill>
            <Image src={bannerAG} width={100} height={100} alt='' />
          </C.Skill>
          <C.Skill>
            <Image src={bannerNT} width={100} height={100} alt='' />
          </C.Skill>
          <C.Skill>
            <Image src={bannerND} width={100} height={100} alt='' />
          </C.Skill>
        </C.SkillsContainer>
      </C.Container>
    </>
  )
}
