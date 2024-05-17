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
          <Route path="/" element={<Splash />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/womens" element={<Womens />} />
          <Route path="/upcoming-artist" element={<UpcomingArtist />} />
          <Route path="/details" element={<Details />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </ShoppingCartProvider>
    </>
  )
}

export default App
