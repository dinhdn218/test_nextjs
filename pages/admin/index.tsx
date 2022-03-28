import { ReactElement } from 'react'
import { NozaLayout } from '../../components/layout'
import { NextPageWithLayout } from '../../components/layout/layoutPropsType'

const AdminHomePage: NextPageWithLayout = () => {
  return <div>web quan ly chung</div>
}

AdminHomePage.getLayout = function getLayout(page: ReactElement) {
  return <NozaLayout>{page}</NozaLayout>
}

export default AdminHomePage
