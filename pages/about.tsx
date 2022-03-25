import React from 'react';
import { NextPage } from 'Next';
import { MainLayout } from '../components/layout';
import Link from 'next/link';

type Props = {};

const About: NextPage = (props: Props) => {
  return (
    <div>
      <div className="about">about</div>
      <Link href="/">
        <a>Go to home page</a>
      </Link>
    </div>
  );
};

export default About;
