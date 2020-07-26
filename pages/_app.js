import '../styles/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/common/navbar';
import Footer from '../components/common/footer';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}
