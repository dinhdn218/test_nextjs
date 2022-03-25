import React from 'react';
import SideBar from '../common/Sidebar/admin';
import { LayoutPropsType } from './layoutPropsType';

export const MainLayout = ({ children }: LayoutPropsType) => {
  return (
    <div className="main-layout">
      <SideBar />
      {children}
    </div>
  );
};
