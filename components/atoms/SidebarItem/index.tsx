import SidebarItemView from './view';

type Props = {
  textContent: string;
};

const SidebarItem = ({ textContent }: Props): JSX.Element => {
  return <SidebarItemView textContent={textContent} />;
};

export default SidebarItem;
