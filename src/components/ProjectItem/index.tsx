import { BiGitRepoForked, BiLinkAlt } from 'react-icons/bi'
import * as C from './styles'

type ProjectItemProps = {
  title: string
  deploy?: string
  type: string
  imgUrl: string
  repo: string
}

export function ProjectItem({
  title,
  type,
  imgUrl,
  repo,
  deploy,
}: ProjectItemProps) {
  return (
    <C.Container imgUrl=''>
      <C.Card>
        <C.Content>
          <C.Image>
            <img src={imgUrl} width={100} height={100} alt='' />
          </C.Image>

          <C.CardContent>
            <h3>
              {title}
              <br />
              <span>{type}</span>
            </h3>
          </C.CardContent>
        </C.Content>

        <ul>
          <li>
            <a href={repo} target='_blank'>
              <i aria-hidden='true'>
                <BiGitRepoForked />
              </i>
            </a>
          </li>
          <li>
            <a href={deploy} target='_blank'>
              <i aria-hidden='true'>
                <BiLinkAlt />
              </i>
            </a>
          </li>
        </ul>
      </C.Card>
    </C.Container>
  )
}
