import '../styles/globals.css';

export default function App({ Component, pageProps }: import('next/app').AppProps) {
  return <Component {...pageProps} />;
}
