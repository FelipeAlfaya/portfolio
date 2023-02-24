import * as C from './styles'

type ProjectItemProps = {
  title: string
  description?: string
  type: string
  imgUrl: string
  repo: string
}

export function ProjectItem({ title, type, imgUrl, repo }: ProjectItemProps) {
  return (
    <C.Container imgUrl={imgUrl}>
      <a target='_blank' href={`${repo}`}>
        <div className='overlay' />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>
      </a>
    </C.Container>
  )
}
