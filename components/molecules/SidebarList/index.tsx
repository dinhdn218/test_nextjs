import SidebarListView from './view';

type Props = {
  textContent: string;
};

const SidebarList = ({ textContent }: Props): JSX.Element => {
  return <SidebarListView textContent={textContent} />;
};

export default SidebarList;
