import { BaseSyntheticEvent, useRef, useState } from 'react'
import { AdminSidebarItemType } from './AdminSidebarType'
import { adminSidebar } from './AdminSidebarDefination'
import AdminSidebarView from './view'

export type AdminSidebarMenuType = {
  featureList: AdminSidebarItemType[]
  optionalClass: string
}

const AdminSideBar = (): JSX.Element => {
  const [menu, setMenu] = useState<AdminSidebarMenuType>(() => {
    // Khi login sẽ hiển thị tab quản lý user
    const featureDefault = adminSidebar[adminSidebar.length - 1]
    return {
      featureList: featureDefault.featureList,
      optionalClass: featureDefault.optionalClass,
    }
  })

  const triangleRef = useRef<HTMLDivElement>(null)

  // Hàm thay đổi nội dung menu sidebar khi click vào từng button quản lý matching/user/video
  const handleChangeMenu = (
    e: BaseSyntheticEvent,
    className: string,
    featureList: AdminSidebarItemType[]
  ) => {
    const { x, width } = e.target.getBoundingClientRect()
    // Thay đổi tọa độ hình tam giác phần sidebar body mỗi lần click vào quản lý matching/user/video
    if (triangleRef && triangleRef.current) {
      const plusPx = (width - triangleRef.current.offsetWidth) / 2
      triangleRef.current.style.left = `${x + plusPx}px`
    }
    // Thay đổi lại menu và màu nền của sidebar
    setMenu({
      featureList: featureList,
      optionalClass: className,
    })
  }

  return (
    <AdminSidebarView
      adminSidebar={adminSidebar}
      handleChangeMenu={handleChangeMenu}
      menu={menu}
      triangleRef={triangleRef}
    />
  )
}

export default AdminSideBar
