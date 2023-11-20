import Header from '@/components/Header'
import '@/styles/globals.css'
import '@/styles/theme.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
