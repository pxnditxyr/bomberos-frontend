import { Navbar, RoutesManager } from '../../components'
import { navbarLinksPublic } from '../helpers'
import { routes } from './publicRoutes'

export const PublicRoutes = () => {
  return (
    <div>
      <Navbar navbarLinks={ navbarLinksPublic } bgImage="https://i.ibb.co/D4khK2m/ezgif-com-optimize.gif" />
      <RoutesManager routes={ routes } />
    </div>
  )
}
