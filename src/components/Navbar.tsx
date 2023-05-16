import { Link } from 'react-router-dom'
import { INavbarLinks } from '../interfaces'

interface IProps {
  navbarLinks: INavbarLinks[],
  bgImage?: boolean,
  style?: React.CSSProperties
}

export const Navbar = ( { navbarLinks, bgImage, style } : IProps ) => {
  return (
    
    <nav
      className={ `w-full flex flex-row border-b-4 ${ bgImage ? `py-20` : 'py-5 bg-red-500' }` }
      style={ style }
    >
      <ul className="w-full flex flex-row justify-center text-white px-5 gap-4">
        {
          navbarLinks.map( ( { to, name, exact } ) => (
            <li key={ name } className="px-6 py-2 font-bold text-lg flex items-center bg-red-500 text-center rounded-3xl hover:bg-black">
              <Link
                to={ `${ ( exact ) ? to : '../' }${ ( to === '/' ) ? '' : to }` }
              > { name } </Link>
            </li>
          ) )
        }
      </ul>
    </nav>
  )
}
