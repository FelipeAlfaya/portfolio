import React from 'react'
import Header from '../components/Header'
import Particle from '../components/Particle'
import Link from 'next/link'
import * as C from '../styles/styles404'
import Button from '../components/Button'

const NotFound = () => {
  return (
    // <Particle>
    <>
      <Header />
      <C.Container>
        <C.TextContainer>
          <C.BigText>404</C.BigText>
          <h1>Page not found or removed.</h1>
          <Button>
            <Link href='/'>Go back to home</Link>
          </Button>
        </C.TextContainer>
      </C.Container>
    </>
    // </Particle>
  )
}

export default NotFound
