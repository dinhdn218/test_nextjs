import { BaseSyntheticEvent } from 'react';
import { AdminSidebarItemType, AdminSidebarType } from '../../organisms/AdminSidebar/AdminSidebarType';
import SidebarTabListView from './view';

type Props = {
  adminSidebar : AdminSidebarType[];
  onChangeMenu: (
    e: BaseSyntheticEvent,
    className: string,
    featureList: AdminSidebarItemType[]
  ) => void
};

const SidebarTabList = ({ adminSidebar,onChangeMenu }: Props): JSX.Element => {
  return <SidebarTabListView onChangeMenu={onChangeMenu} adminSidebar={adminSidebar} />;
};

export default SidebarTabList;
