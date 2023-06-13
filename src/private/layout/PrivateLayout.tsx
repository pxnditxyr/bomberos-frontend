import { Navbar } from '../../components';
import { useUiStore } from '../../hooks';
import { INavbarLinks } from '../../interfaces';

interface IProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  hegiht?: boolean;
}


export const PrivateLayout = ( { children, title, hegiht } : IProps ) => {

  const navbarLinks : INavbarLinks[] = [
    {
      to: 'categories',
      name: 'Categorías',
      onClick: () => closeDateModal(),
    },
    {
      to: 'articles',
      name: 'Artículos',
      onClick: () => closeDateModal(),
    },
    {
      to: 'stations',
      name: 'Estaciones',
      onClick: () => closeDateModal(),
    },
    {
      to: 'calls',
      name: 'Llamadas',
      onClick: () => closeDateModal(),
    },
    {
      to: 'yo-bombero',
      name: 'Yo Bombero',
      onClick: () => closeDateModal(),
    },
  ]
  const { closeDateModal } = useUiStore()

  return (
    <div className={ `w-full flex flex-col ${ hegiht ? 'h-full' : 'h-screen' } bg-gradient-to-r from-cyan-500 to-blue-500` }>
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
