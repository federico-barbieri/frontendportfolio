import '@/styles/globals.css'
import LayoutNew from '@/components/LayoutNew/Layout'

export default function App({ Component, pageProps }) {
  return ( 
  <LayoutNew>
  <Component {...pageProps} />
  </LayoutNew>
  )
}
