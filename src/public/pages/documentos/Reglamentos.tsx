import { PublicLayout } from '../../layout'
import { navbarLinksDocumentos } from './navbarLinksDocumentos'

export const Reglamentos = () => {
  return (
    <PublicLayout title="Reglamentos" navbarLinks={ navbarLinksDocumentos } className="h-auto">
      <iframe src="https://sea.gob.bo/digesto/CompendioII/I/59_L_449.pdf" width="100%" height="1000px"></iframe>
    </PublicLayout>
  )
}
