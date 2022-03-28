import { BaseSyntheticEvent, LegacyRef } from 'react'
import SidebarTab from '../../molecules/SidebarTab'
import SidebarItem from '../../atoms/SidebarItem'
import { AdminSidebarItemType, AdminSidebarType } from './AdminSidebarType'
import { AdminSidebarMenuType } from '.'

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
      <div className="sidebar-top">
        {adminSidebar.map((item, index) => {
          return (
            <SidebarTab
              onChangeMenu={handleChangeMenu}
              key={index}
              path={item.path}
              src={item.src}
              optionalClass={item.optionalClass}
              featureList={item.featureList}
            />
          )
        })}
      </div>
      <div className={`sidebar-body ${menu.optionalClass}`}>
        {menu &&
          menu.featureList.length > 0 &&
          menu.featureList.map((menuItem, index) => {
            return <SidebarItem key={index} textContent={menuItem.label} />
          })}
        <div
          ref={triangleRef}
          className={`sidebar-body-triangle ${menu.optionalClass}`}
        ></div>
      </div>
    </div>
  )
}

export default AdminSidebarView
