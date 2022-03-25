import { BaseSyntheticEvent, useEffect } from 'react';
import SidebarFeatureButtonView from './view';

type Props = {
  path: string;
  optionalClass: string;
  src: string;
  menuList: object[];
  onChangeMenu: Function;
};

const SidebarTab = ({
  path,
  optionalClass,
  src,
  menuList,
  onChangeMenu,
}: Props): JSX.Element => {
  const handleClick = (e: BaseSyntheticEvent) => {
    onChangeMenu(e, optionalClass, menuList);
  };

  return (
    <SidebarFeatureButtonView
      handleClick={handleClick}
      optionalClass={optionalClass}
      src={src}
    />
  );
};

export default SidebarTab;
