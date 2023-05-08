import { INavbarLinks } from '../../interfaces';

export const navbarLinksPublic : INavbarLinks[] = [
  {
    to: '/',
    name: 'Inicio'
  },
  {
    to: 'quienes-somos',
    name: 'Quienes Somos'
  },
  {
    to: 'documentos',
    name: 'Documentos'
  },
  {
    to: 'bomberos',
    name: 'Bomberos'
  },
  {
    to: 'catalogo-bomberil',
    name: 'Catalogo Bomberil'
  },
  {
    to: 'fundacion-de-capacitacion',
    name: 'Fundacion de Capacitacion'
  },
  {
    to: '/auth/signin',
    name: 'Iniciar Sesion',
    exact: true
  },
]
