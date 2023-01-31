import Link from 'next/link'
import * as C from './styles'

type ProjectItemProps = {
  title: string
  description?: string
  type: string
  imgUrl: string
  slug: string
  repo: string
}

export function ProjectItem({
  title,
  description,
  type,
  imgUrl,
  slug,
  repo,
}: ProjectItemProps) {
  return (
    <C.Container imgUrl={imgUrl}>
      <Link legacyBehavior href={`/project/${slug}`}>
        <a>
          <div className='overlay' />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </C.Container>
  )
}
