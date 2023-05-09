import { PublicLayout } from '../../layout'
import { navbarLinksDocumentos } from './navbarLinksDocumentos'

export const ManualCovid = () => {
  return (
    <PublicLayout title="Manual Covid" navbarLinks={ navbarLinksDocumentos } className="h-auto">
      <iframe src="/documents/manual_covid.pdf" width="100%" height="1000px"></iframe>
    </PublicLayout>
  )
}
