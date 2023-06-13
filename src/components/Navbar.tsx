import { Link } from 'react-router-dom'
import { INavbarLinks } from '../interfaces'

interface IProps {
  navbarLinks: INavbarLinks[],
  bgImage?: boolean,
  style?: React.CSSProperties
  border?: boolean
}

export const Navbar = ( { navbarLinks, bgImage, style, border } : IProps ) => {
  return (
    
    <nav
      className={ `w-full flex flex-row ${ !border ? 'border-b-4' : ''  } ${ bgImage ? `py-20` : 'py-5 bg-red-500' }` }
      style={ style }
    >
      <ul className="w-full flex flex-row justify-center text-white px-5 gap-4">
        {
          navbarLinks.map( ( { to, name, exact, onClick } ) => (
            <li key={ name } className="px-6 py-2 font-bold text-lg flex items-center bg-red-500 text-center rounded-3xl hover:bg-black">
              <Link
                to={ `${ ( exact ) ? to : '../' }${ ( to === '/' ) ? '' : to }` }
                onClick={ onClick }
              > { name } </Link>
            </li>
          ) )
        }
      </ul>
    </nav>
  )
}
