import { BaseSyntheticEvent, LegacyRef } from 'react'
import SidebarTab from '../../atoms/SidebarTab'
import SidebarItem from '../../atoms/SidebarItem'
import { AdminSidebarItemType, AdminSidebarType } from './AdminSidebarType'
import { AdminSidebarMenuType } from '.'
import SidebarTabList from '../../molecules/SidebarTabList'
import SidebarList from '../../molecules/SidebarList'

type Props = {
  adminSidebar: AdminSidebarType[]
  handleChangeMenu: (
    e: BaseSyntheticEvent,
    className: string,
    featureList: AdminSidebarItemType[]
  ) => void
  menu: AdminSidebarMenuType
  triangleRef: LegacyRef<HTMLDivElement>
}

const AdminSidebarView: React.FC<Props> = ({
  adminSidebar,
  handleChangeMenu,
  menu,
  triangleRef,
}: Props) => {
  return (
    <div className="sidebar">
      <SidebarTabList onChangeMenu={handleChangeMenu} adminSidebar={adminSidebar} />
      <div className={`sidebar-list ${menu.optionalClass}`}>
        <SidebarList menu={menu}/>
        <div
          ref={triangleRef}
          className={`sidebar-list-triangle ${menu.optionalClass}`}
        ></div>
      </div>
    </div>
  )
}

export default AdminSidebarView
