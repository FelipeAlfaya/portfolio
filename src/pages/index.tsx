import * as H from '../styles/homestyles'
import Header from '../components/Header'
import { HomeHero } from '../components/HomeHero'

export default function Home() {
  return (
    <H.HomeContainer>
      <Header />

      <main className='container'>
        <HomeHero />
      </main>
    </H.HomeContainer>
  )
}
