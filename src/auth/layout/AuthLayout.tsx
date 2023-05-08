import { Navbar } from '../../components';
import { INavbarLinks } from '../../interfaces';

interface IProps {
  children: JSX.Element | JSX.Element[];
  title: string;
}

const navbarLinks : INavbarLinks[] = [
  {
    to: '/',
    name: 'Inicio',
    exact: true,
  },
]

export const AuthLayout = ( { children, title } : IProps ) => {
  return (
    <div>
      <Navbar navbarLinks={ navbarLinks } />
      <h1>{ title }</h1>
      <div>
        { children }
      </div>
    </div>
  )
}
