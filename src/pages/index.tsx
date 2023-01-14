//Styles
import * as H from '../styles/homestyles'

//Components
import Header from '../components/Header'
import { HomeHero } from '../components/HomeHero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Head } from 'next/document'

export default function Home() {
  return (
    <H.HomeContainer>
      <Header />

      <main className='container'>
        <HomeHero />
        <About />
        <Skills />
      </main>
    </H.HomeContainer>
  )
}
