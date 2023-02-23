import React from 'react'
import Header from '../../components/Header'
import * as C from '../../styles/projectstyles'
import { ProjectItem } from '../../components/ProjectItem'
import { AiOutlineProject } from 'react-icons/ai'

function index() {
  return (
    <C.Container>
      <Header />
      <C.TitleContainer>
        <h1>Projects</h1>
        <h2>
          <AiOutlineProject />
        </h2>
      </C.TitleContainer>
      <main className='container'>
        <ProjectItem
          title='Portfolio'
          type='Website'
          slug='portfolio'
          imgUrl=''
          description='Portfolio desenvolvido com NextJS e Styled Components'
          repo='https://github.com/FelipeAlfaya/portfolio'
        />
        <ProjectItem
          title='Netflix Clone'
          type='Website'
          slug='netflix'
          imgUrl='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          description='Netflix Clone made with NextJS and TailwindCSS'
          repo='https://www.google.com'
        />
        <ProjectItem
          title='Pokedex'
          type='Website'
          slug='pokedex'
          imgUrl='https://pngimg.com/d/pokeball_PNG8.png'
          description='Pokedex made in Angular'
          repo='https://www.google.com'
        />
      </main>
    </C.Container>
  )
}

export default index
