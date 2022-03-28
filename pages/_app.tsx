import { AppPropsWithLayout } from '../components/layout/layoutPropsType';
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
