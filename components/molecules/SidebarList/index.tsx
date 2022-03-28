import { BaseSyntheticEvent } from 'react';
import { AdminSidebarMenuType } from '../../organisms/AdminSidebar';
import { AdminSidebarItemType, AdminSidebarType } from '../../organisms/AdminSidebar/AdminSidebarType';
import SidebarListView from './view';

type Props = {
  menu: AdminSidebarMenuType
};

const SidebarList = ({ menu }: Props): JSX.Element => {
  return <SidebarListView  menu={menu}/>;
};

export default SidebarList;
