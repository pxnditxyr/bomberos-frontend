import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { PublicRoutes } from '../public/routes/PublicRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';
import { YoBombero } from '../yo-bombero/pages';
import { Loading } from '../pages';

export const AppRouter = () => {
  
  const { status, checkAuthToken } = useAuthStore();
  // const status = 'checking'

  useEffect( () => {
    checkAuthToken();
  }, [] )

  if ( status === 'checking' ) {
    return <Loading />
  }

  return (
    <BrowserRouter>
      <Routes>
        {
          ( status === 'not-authenticated' )
            ? (
              <>
                <Route path="/*" element={ <PublicRoutes /> } />
                <Route path="auth/*" element={ <AuthRoutes /> } />

                <Route path="yo-bombero/*" element={ <Navigate to="/auth/signin" /> } />
              </>
            )
            : (
              <>
                <Route path="yo-bombero" element={ <YoBombero /> } />
                <Route path="*" element={ <Navigate to="/yo-bombero" /> } />
              </>
            )
        }
      </Routes>
    </BrowserRouter>
  )
}
