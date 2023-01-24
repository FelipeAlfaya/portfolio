//Styles
import * as H from '../styles/homestyles'

//Components
import Header from '../components/Header'
import { HomeHero } from '../components/HomeHero'
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Contact } from '../components/Contact'

export default function Home() {
  return (
    <H.HomeContainer>
      <Header />

      <main className='container'>
        <HomeHero />
        <About />
        <Skills />
        <Contact />
      </main>
    </H.HomeContainer>
  )
}
