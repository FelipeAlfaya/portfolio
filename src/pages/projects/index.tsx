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
          deploy='/'
          imgUrl='https://www.nicepng.com/png/detail/111-1112693_portfolio-my-portfolio.png'
          repo='https://github.com/FelipeAlfaya/portfolio'
        />
        <ProjectItem
          title='Netflix Clone'
          type='Website'
          deploy='https://netflix-clone-teal-seven.vercel.app/'
          imgUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png'
          repo='https://github.com/FelipeAlfaya/netflix-clone'
        />
        <ProjectItem
          title='Pokedex'
          type='Website'
          deploy='https://pokedex-liart-three.vercel.app/'
          imgUrl='https://pngimg.com/d/pokeball_PNG8.png'
          repo='https://github.com/FelipeAlfaya/pokedex'
        />
      </main>
    </C.Container>
  )
}

export default index
