import type { AppProps } from 'next/app';

import '@/assets/styles/global.scss';

import { ReactQueryProvider } from '@/providers/react-query-provider';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ReactQueryProvider>
			<Component {...pageProps} />
		</ReactQueryProvider>
	);
}

export default MyApp;
