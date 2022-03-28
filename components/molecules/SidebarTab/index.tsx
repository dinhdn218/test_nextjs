import { BaseSyntheticEvent } from 'react'
import { AdminSidebarItemType } from '../../organisms/AdminSidebar/AdminSidebarType'
import SidebarTabView from './view'

type Props = {
  path: string
  optionalClass: string
  src: string
  featureList: AdminSidebarItemType[]
  onChangeMenu: (
    e: BaseSyntheticEvent,
    className: string,
    featureList: AdminSidebarItemType[]
  ) => void
}

const SidebarTab = ({
  optionalClass,
  src,
  featureList,
  onChangeMenu,
}: Props): JSX.Element => {
  const handleClick = (e: BaseSyntheticEvent) => {
    onChangeMenu(e, optionalClass, featureList)
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
