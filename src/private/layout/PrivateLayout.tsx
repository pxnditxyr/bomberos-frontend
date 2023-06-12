import { Navbar } from '../../components';
import { INavbarLinks } from '../../interfaces';

interface IProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  hegiht?: boolean;
}

const navbarLinks : INavbarLinks[] = [
  {
    to: 'categories',
    name: 'Categorías',
  },
  {
    to: 'articles',
    name: 'Artículos',
  },
  {
    to: 'stations',
    name: 'Estaciones',
  },
  {
    to: 'calls',
    name: 'Llamadas',
  },
  {
    to: 'yo-bombero',
    name: 'Yo Bombero',
  },
]

export const PrivateLayout = ( { children, title, hegiht } : IProps ) => {
  return (
    <div className={ `w-full flex flex-col ${ hegiht ? 'h-full' : 'h-screen' } bg-gradient-to-r from-red-500 via-purple-500 to-pink-500` }>
      <Navbar navbarLinks={ navbarLinks } border />
      <div
        className="w-full h-full flex flex-col justify-center items-center gap-4 px-4 py-8 overflow-y-auto"
      >
        <h1
          className="text-3xl font-bold font-serif text-center"
        >{ title }</h1>
        <div className="w-full flex flex-col justify-center items-center gap-4 px-4 py-8">
          { children }
        </div>
      </div>
    </div>
  )
}
