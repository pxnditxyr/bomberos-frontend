import { Link } from 'react-router-dom'
import { INavbarLinks } from '../interfaces'

interface IProps {
  navbarLinks: INavbarLinks[],
  bgImage?: string
}

export const Navbar = ( { navbarLinks, bgImage } : IProps ) => {
  return (
    
    <nav className={ `w-full flex flex-row py-5 border-b-4 bg-red-500 ${ bgImage ? `bg-[url('${ bgImage }')] bg-no-repeat py-20 bg-[length:100%_350px] bg-top bg-black` : "" }` }>
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
