import React, { useEffect } from 'react';

type Props = {};

const Header = (props: Props) => {
  useEffect(() => {
    console.log('render header');
    return () => {
      console.log('header unmounting');
    };
  }, []);
  return <div>Header</div>;
};

export default Header;
