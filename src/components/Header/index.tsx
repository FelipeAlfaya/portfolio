import Link from 'next/link'
import { useEffect } from 'react'

function Header() {
  // useEffect(() => {
  //   const btn = document.getElementById('menu_btn') as HTMLElement
  //   const menu = document.getElementById('menu') as HTMLElement

  //   btn.addEventListener('click', () => {
  //     btn.classList.toggle('open')
  //     menu.classList.toggle('flex')
  //     menu.classList.toggle('hidden')
  //   })
  // }, [])
  return (
    <nav>
      <div>
        <div>
          <a>
            <Link href={'/'}>
              <img
                src='Alfaya.svg'
                className='w-36 h-fit hover:drop-shadow-md'
                alt='logo'
              ></img>
            </Link>
          </a>
        </div>

        <div>
          <a>
            <Link href={'/'}>Home</Link>
          </a>
          <a>
            <Link href={'/projects'}>Projects</Link>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
