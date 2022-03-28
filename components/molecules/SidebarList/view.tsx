import React from 'react';

type Props = {
  textContent: string;
};

const SidebarListView: React.FC<Props> = ({ textContent }: Props) => {
  return <div className="sidebar-item">{textContent}</div>;
};

export default SidebarListView;
