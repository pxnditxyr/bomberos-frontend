import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { PublicRoutes } from '../public/routes/PublicRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'

export const AppRouter = () => {

  const status = 'not-authenticated'

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
                <Route path="yo-bombero" element={ <h1>Yo soy bombero</h1> } />
                <Route path="*" element={ <Navigate to="/yo-bombero" /> } />
              </>
            )
        }
      </Routes>
    </BrowserRouter>
  )
}
