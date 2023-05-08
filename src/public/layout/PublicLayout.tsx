import { Navbar } from '../../components';
import { INavbarLinks } from '../../interfaces';

interface IProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  navbarLinks: INavbarLinks[];
}

export const PublicLayout = ( { children, title, navbarLinks } : IProps ) => {
  return (
    <div>
      <Navbar navbarLinks={ navbarLinks } />
      <h1> { title } </h1>
      <main>
        { children }
      </main>
    </div>
  )
}
