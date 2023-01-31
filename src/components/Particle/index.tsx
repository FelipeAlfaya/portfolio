import { ReactNode, useCallback, useEffect, useState } from 'react'
import { ParticlesOptions, tsParticles } from 'tsparticles-engine'
import * as S from './styles'
import { useTheme } from 'styled-components'
import { loadFull } from 'tsparticles'

type Props = {
  children: ReactNode
}

const Particle = (props: Props) => {
  const theme = useTheme()
  const [loaded, setLoaded] = useState(false)

  const settings = {
    fps_limit: 60,
    interactivity: {
      detect_on: 'canvas',
    },
    particles: {
      color: {
        value: theme.primary,
      },
      line_linked: {
        width: 2,
        opacity: 0.3,
        enable: true,
        consent: true,
        color: '#0197AF',
        distance: 200,
        blink: false,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: 'none',
        enable: true,
        out_mode: 'bounce',
        random: true,
        speed: 1,
        straight: false,
        colision: true,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: true,
        },
      },
      shape: {
        type: 'circle',
      },
    },
    retina_detect: true,
    fullScreen: false,
  }

  const getSettings = useCallback(async () => {
    await loadFull(tsParticles)

    const el = document.querySelector('#ts-particles')

    if (!el) {
      return
    }

    await tsParticles
      .load('ts-particles', {
        ...(settings as unknown as ParticlesOptions),
        preset: 'triangles',
      })
      .then(() => {
        setLoaded(true)
      })
  }, [])

  useEffect(() => {
    getSettings().then()
  }, [getSettings])

  return (
    <>
      <S.ParticlesContainer id='ts-particles'>
        {loaded && (
          <>
            <S.ParticlesOverlay>
              <S.ParticlesOverlayContent>
                {props.children}
              </S.ParticlesOverlayContent>
            </S.ParticlesOverlay>
          </>
        )}
      </S.ParticlesContainer>
    </>
  )
}

export default Particle
