import React from 'react';
import SideBar from '../common/Sidebar/admin';
import { LayoutPropsType } from './layoutPropsType';

export const HospitalLayout = ({ children }: LayoutPropsType) => {
    return (
        <div className="hospital-layout">
            <SideBar />
            {children}
        </div>
    );
};
