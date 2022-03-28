import React, { BaseSyntheticEvent } from 'react'
import Image from 'next/image'

type Props = {
  optionalClass: string
  handleClick: (e: BaseSyntheticEvent) => void
  src: string
}

const SidebarTabView: React.FC<Props> = ({
  handleClick,
  optionalClass,
  src,
}: Props) => {
  return (
    <div
      className={`sidebar-tab ${optionalClass}`}
      onClick={(e) => handleClick(e)}
    >
      <Image
        className="sidebar-tab-img"
        layout="fill"
        objectFit="cover"
        src={src}
        alt="image"
      ></Image>
    </div>
  )
}

export default SidebarTabView
