import { Navbar, RoutesManager } from '../../components'
import { navbarLinksPublic } from '../helpers'
import { routes } from './publicRoutes'

export const PublicRoutes = () => {
  return (
    <div>
      <Navbar
        navbarLinks={ navbarLinksPublic } bgImage
        style={ {
          /* bg-no-repeat py-20 bg-[length:100%_350px] bg-top bg-black  py is padding in top and bottom*/
          backgroundImage: 'url(/images/bomberos_navbar.gif)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundSize: '100% 350px',
        } }
      />
      <RoutesManager routes={ routes } />
    </div>
  )
}
