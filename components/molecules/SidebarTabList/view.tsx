import React, { BaseSyntheticEvent } from 'react';
import SidebarTab from '../../atoms/SidebarTab';
import { AdminSidebarItemType, AdminSidebarType } from '../../organisms/AdminSidebar/AdminSidebarType';

type Props = {
  adminSidebar: AdminSidebarType[];
  onChangeMenu: (
    e: BaseSyntheticEvent,
    className: string,
    featureList: AdminSidebarItemType[]
  ) => void
};

const SidebarTabListView: React.FC<Props> = ({ adminSidebar, onChangeMenu }: Props) => {
  return <div className="sidebar-tab-list">
        {adminSidebar.map((item, index) => {
          return (
            <SidebarTab
              onChangeMenu={onChangeMenu}
              key={index}
              path={item.path}
              src={item.src}
              optionalClass={item.optionalClass}
              featureList={item.featureList}
            />
          )
        })}
      </div>;
};

export default SidebarTabListView;
