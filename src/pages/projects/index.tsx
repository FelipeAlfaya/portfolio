import React from 'react'
import Header from '../../components/Header'
import * as C from '../../styles/projectstyles'
import { ProjectItem } from '../../components/ProjectItem'
import { AiOutlineProject } from 'react-icons/ai'
import Port from '../../assets/port.png'

function index() {
  const portfolioimg =
    'blob:' + 'https://vercel.com/e9ec8c49-0855-462f-9789-7fdf18d6461f'

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
          imgUrl={portfolioimg}
          description='Portfolio desenvolvido com NextJS e Styled Components'
          repo='https://github.com/FelipeAlfaya/portfolio'
        />
        <ProjectItem
          title='Netflix Clone'
          type='Website'
          slug='netflix'
          imgUrl='https://www.computerhope.com/jargon/h/img.png'
          description='Netflix Clone made with NextJS and TailwindCSS'
          repo='https://www.google.com'
        />
        <ProjectItem
          title='Pokedex'
          type='Website'
          slug='pokedex'
          imgUrl='https://www.computerhope.com/jargon/h/img.png'
          description='Pokedex made in Angular'
          repo='https://www.google.com'
        />
        <ProjectItem
          title='Projeto 01'
          type='Website'
          slug='teste'
          imgUrl='https://www.computerhope.com/jargon/h/img.png'
          description='lorem5'
          repo='https://www.google.com'
        />
      </main>
    </C.Container>
  )
}

export default index
