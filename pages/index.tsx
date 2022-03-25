import type { NextPage } from 'next';
import Link from 'next/link';
import { MainLayout } from '../components/layout';

const Home: NextPage = () => {
  return (
    <div>
      <div className="home">home</div>
      <Link href="/about">
        <a>Go to about page</a>
      </Link>
    </div>
  );
};

export default Home;
