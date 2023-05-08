import { IRoute } from '../../interfaces/routes.interface';
import {
    Aniversarios,
  Capacitaciones,
  CuerpoDeBomberos,
  Cursos,
  EmblemaInstitucional,
  Estatutos,
  Historia,
  HistoriaBomberos,
  Home,
  ManualCovid,
  MisionVision,
  ProfesionalesDeLaEmergencia,
  QuieresSerBombero,
  Reglamentos,
  Talleres,
  UniformeInstitucional
} from '../pages';

export const routes : IRoute[] = [
  {
    path: '/',
    Component: Home,
    description: 'Inicio',
    image: 'https://i.imgur.com/3Z0QW0n.jpg'
  },
  {
    path: 'quienes-somos/*',
    children: [
      {
        path: '/',
        Component: MisionVision,
        description: 'Misión y Visión',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      },
      {
        path: 'historia',
        Component: Historia,
        description: 'Historia',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      },
      {
        path: 'emblema-institucional',
        Component: EmblemaInstitucional,
        description: 'Emblema Institucional',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      }
    ]
  },
  {
    path: 'documentos/*',
    children: [
      {
        path: '/',
        Component: Estatutos,
        description: 'Estatutos',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      },
      {
        path: 'reglamentos',
        Component: Reglamentos,
        description: 'Reglamentos',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      },
      {
        path: 'manual-covid',
        Component: ManualCovid,
        description: 'Manual Covid',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      }
    ]
  },
  {
    path: 'bomberos/*',
    children: [
      {
        path: '/',
        Component: HistoriaBomberos,
        description: 'Historia',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      },
      {
        path: 'quieres-ser-bombero',
        Component: QuieresSerBombero,
        description: '¿Quieres ser Bombero?',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      },
      {
        path: 'cuerpo-de-bomberos',
        Component: CuerpoDeBomberos,
        description: 'Cuerpo de Bomberos',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      },
      {
        path: 'profesionales-de-la-emergencia',
        Component: ProfesionalesDeLaEmergencia,
        description: 'Profesionales de la Emergencia',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      },
      {
        path: 'aniversarios',
        Component: Aniversarios,
        description: 'Aniversarios',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      }
    ]
  },
  {
    path: 'catalogo-bomberil/*',
    children: [
      {
        path: '/',
        Component: UniformeInstitucional,
        description: 'Uniforme Institucional',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      }
    ]
  },
  {
    path: 'fundacion-de-capacitacion/*',
    children: [
      {
        path: '/',
        Component: Capacitaciones,
        description: 'Capacitaciones',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      },
      {
        path: 'cursos',
        Component: Cursos,
        description: 'Cursos',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      },
      {
        path: 'talleres',
        Component: Talleres,
        description: 'Talleres',
        image: 'https://i.imgur.com/3Z0QW0n.jpg'
      }
    ]
  }
]


