import { BaseSyntheticEvent, useRef, useState } from 'react'
import { SidebarItemType } from './SidebarType'
import { sidebar } from './SidebarDefination'
import SidebarView from './view'

export type SidebarMenuType = {
  menuList: SidebarItemType[]
  optionalClass: string
}

const SideBar = (): JSX.Element => {
  const [menu, setMenu] = useState<SidebarMenuType>(() => {
    // Khi login sẽ hiển thị tab quản lý user
    const featureDefault = sidebar[sidebar.length - 1]
    return {
      menuList: featureDefault.menuList,
      optionalClass: featureDefault.optionalClass,
    }
  })

  const triangleRef = useRef<HTMLDivElement>(null)

  // Hàm thay đổi nội dung menu sidebar khi click vào từng button quản lý matching/user/video
  const handleChangeMenu = (
    e: BaseSyntheticEvent,
    className: string,
    menuList: SidebarItemType[]
  ) => {
    const { x, width } = e.target.getBoundingClientRect()
    // Thay đổi tọa độ hình tam giác phần sidebar body mỗi lần click vào quản lý matching/user/video
    if (triangleRef && triangleRef.current) {
      const plusPx = (width - triangleRef.current.offsetWidth) / 2
      triangleRef.current.style.left = `${x + plusPx}px`
    }
    // Thay đổi lại menu và màu nền của sidebar
    setMenu({
      menuList: menuList,
      optionalClass: className,
    })
  }

  return (
    <SidebarView
      sidebar={sidebar}
      handleChangeMenu={handleChangeMenu}
      menu={menu}
      triangleRef={triangleRef}
    />
  )
}

export default SideBar
