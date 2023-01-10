import * as C from './styles'
import NavLink from './NavLink'

function Header() {
  return (
    <C.Container>
      <ul>
        <NavLink title='Home' path='/' />
        <NavLink title='Projects' path='/projects' />
      </ul>
    </C.Container>
  )
}

export default Header
