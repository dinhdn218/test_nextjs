import { LegacyRef } from 'react';
import { MenuType } from '.';
import SidebarTab from '../../SidebarTab';
import { SidebarType } from './SidebarType';

type Props = {
  sidebar: SidebarType[];
  handleChangeMenu: Function;
  menu: MenuType;
  triangleRef: LegacyRef<HTMLDivElement>;
};

const SidebarView: React.FC<Props> = ({
  sidebar,
  handleChangeMenu,
  menu,
  triangleRef,
}: Props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {sidebar.map((item, index) => {
          return (
            <SidebarTab
              onChangeMenu={handleChangeMenu}
              key={index}
              path={item.path}
              src={item.src}
              optionalClass={item.optionalClass}
              menuList={item.menuList}
            />
          );
        })}
      </div>
      <div className={`sidebar-body ${menu.optionalClass}`}>
        {/* {menu &&
          menu.menuList.length > 0 &&
          menu.menuList.map((menuItem, index) => {
            return <SidebarItem key={index} textContent={menuItem.label} />;
          })}
        <div
          ref={triangleRef}
          className={`sidebar-body-triangle ${menu.optionalClass}`}
        ></div> */}
      </div>
    </div>
  );
};

export default SidebarView;