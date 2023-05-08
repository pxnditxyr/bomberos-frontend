import { Link } from 'react-router-dom'
import { INavbarLinks } from '../interfaces'

interface IProps {
  navbarLinks: INavbarLinks[],
}

export const Navbar = ( { navbarLinks } : IProps ) => {
  return (
    
    <nav>
      <ul>
        {
          navbarLinks.map( ( { to, name, exact } ) => (
            <li key={ name }>
              <Link to={ `${ ( exact ) ? to : '../' }${ ( to === '/' ) ? '' : to }` } > { name } </Link>
            </li>
          ) )
        }
      </ul>
    </nav>
  )
}
