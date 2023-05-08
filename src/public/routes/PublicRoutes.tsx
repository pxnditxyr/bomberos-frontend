import { Navbar, RoutesManager } from '../../components'
import { navbarLinksPublic } from '../helpers'
import { routes } from './publicRoutes'

export const PublicRoutes = () => {
  return (
    <div>
      <Navbar navbarLinks={ navbarLinksPublic } />
      <RoutesManager routes={ routes } />
    </div>
  )
}
