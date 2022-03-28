import { ReactElement } from 'react';
import { HospitalLayout } from '../../components/layout';
import { NextPageWithLayout } from '../../components/layout/layoutPropsType';

const HospitalHomePage: NextPageWithLayout = () => {
  return <div>web quan ly benh vien</div>;
};

HospitalHomePage.getLayout = function getLayout(page: ReactElement) {
  return <HospitalLayout>{page}</HospitalLayout>;
};

export default HospitalHomePage;
