import React from 'react'
import Header from '../../components/Header'
import * as C from '../../styles/projectstyles'
import { ProjectItem } from '../../components/ProjectItem'
import { AiOutlineProject } from 'react-icons/ai'
import Particle from '../../components/Particle'

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
      {/* <main className='container'>
        <ProjectItem
          title='Portfolio'
          type='Website'
          slug='teste'
          imgUrl='https://www.computerhope.com/jargon/h/img.png'
          description='Portfolio desenvolvido com NextJS e Styled Components'
          repo='https://github.com/FelipeAlfaya/portfolio'
        />
        <ProjectItem
          title='Netflix Clone'
          type='Website'
          slug='teste'
          imgUrl='https://www.computerhope.com/jargon/h/img.png'
          description='Portfolio desenvolvido com NextJS e Styled Components'
          repo='https://www.google.com'
        />
        <ProjectItem
          title='Pokedex'
          type='Website'
          slug='teste'
          imgUrl='https://www.computerhope.com/jargon/h/img.png'
          description='Portfolio desenvolvido com NextJS e Styled Components'
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
      </main> */}
    </C.Container>
  )
}

export default index
