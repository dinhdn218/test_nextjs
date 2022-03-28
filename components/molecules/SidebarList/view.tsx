import React from 'react';
import SidebarItem from '../../atoms/SidebarItem';
import { AdminSidebarMenuType } from '../../organisms/AdminSidebar';

type Props = {
  menu: AdminSidebarMenuType
};

const SidebarListView: React.FC<Props> = ({ menu }: Props) => {
  return <>
    {menu && menu.featureList && menu.featureList.map((menuItem, index) => {
          return <SidebarItem key={index} textContent={menuItem.label} />
    })}
  </>
  
};

export default SidebarListView;
