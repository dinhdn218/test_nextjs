import { BaseSyntheticEvent } from 'react'
import { SidebarItemType } from '../../organisms/AdminSidebar/SidebarType'
import SidebarTabView from './view'

type Props = {
  path: string
  optionalClass: string
  src: string
  menuList: object[]
  onChangeMenu: (
    e: BaseSyntheticEvent,
    className: string,
    menuList: SidebarItemType[]
  ) => void
}

const SidebarTab = ({
  optionalClass,
  src,
  menuList,
  onChangeMenu,
}: Props): JSX.Element => {
  const handleClick = (e: BaseSyntheticEvent) => {
    onChangeMenu(e, optionalClass, menuList)
  }

  return (
    <SidebarTabView
      handleClick={handleClick}
      optionalClass={optionalClass}
      src={src}
    />
  )
}

export default SidebarTab
