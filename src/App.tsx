import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from "react";
import Navbar from '@/scenes/navbar';
import Splash from '@/scenes/splash';
import Mens from '@/scenes/mens';
import Womens from '@/scenes/womens';
import UpcomingArtist from '@/scenes/upcomingArtist';
import Details from '@/scenes/details';
import Footer from '@/scenes/footer';
import Checkout from './scenes/checkout';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const basePath = 'Gumball/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <ShoppingCartProvider>
        <Navbar isTopOfPage={isTopOfPage} />
        <Routes>
          <Route path={`${basePath}/`} element={<Splash />} />
          <Route path={`${basePath}/mens`} element={<Mens />} />
          <Route path={`${basePath}/womens`} element={<Womens />} />
          <Route path={`${basePath}/upcoming-artist`} element={<UpcomingArtist />} />
          <Route path={`${basePath}/details`} element={<Details />} />
          <Route path={`${basePath}/details/:id`} element={<Details />} />
          <Route path={`${basePath}/checkout`} element={<Checkout />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </>
  )
}

export default App
