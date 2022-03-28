import React from 'react'
import SideBar from '../organisms/AdminSidebar'

import { LayoutPropsType } from './layoutPropsType'

export const NozaLayout = ({ children }: LayoutPropsType) => {
  return (
    <div className="noza-layout">
      <SideBar />
      {children}
    </div>
  )
}
