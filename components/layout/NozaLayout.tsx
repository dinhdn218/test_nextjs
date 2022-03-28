import React from 'react';
import SideBar from '../common/Sidebar/admin';
import { LayoutPropsType } from './layoutPropsType';

export const NozaLayout = ({ children }: LayoutPropsType) => {
    return (
        <div className="noza-layout">
            <SideBar />
            {children}
        </div>
    );
};
