import { Navigate, Route } from 'react-router-dom'
import { RoutesManager } from '../../components'
import { IRoute } from '../../interfaces'
import { YoBombero } from '../../yo-bombero/pages'
import { PrivateLayout } from '../layout'
import { Categories } from '../../categories/pages/Categories'
import { Articles } from '../../articles'
import { Stations } from '../../stations'
import { Calls } from '../../calls'


export const PrivateRoutes = () => {

  const routes : IRoute[] = [
    {
      path: 'categories',
      Component: Categories,
    },
    {
      path: 'articles',
      Component: Articles
    },
    {
      path: 'stations',
      Component: Stations,
    },
    {
      path: 'calls',
      Component: Calls,
    },
    {
      path: 'yo-bombero',
      Component: YoBombero,
    },
  ]

  return (
    <PrivateLayout title="">
      <RoutesManager routes={ routes } notUseNotFound>
        <Route path="*" element={ <Navigate to="/yo-bombero" /> } />
      </RoutesManager>
    </PrivateLayout>
  )
}
