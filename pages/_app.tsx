import type { AppProps } from 'next/app';
import { NozaLayout, HospitalLayout } from '../components/layout';
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NozaLayout>
                <Component {...pageProps} />
            </NozaLayout>
        </>
    );
}

export default MyApp;
