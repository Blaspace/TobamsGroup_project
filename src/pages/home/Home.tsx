import React from "react";
import Navbar from "../../component/Navbar.tsx";
import Header from "./Header.tsx";
import Footer from "../../component/Footer.tsx";
import LogoSection from "./Logosection.tsx";
import ProductSection from "./ProductSection.tsx";
import FourthSection from "./FourthSection.tsx";
import FifthSection from "./FifthSection.tsx";
import SixthSection from "./SixthSection.tsx";
import NumberSection from "./NumberSection.tsx";
import NinethSection from "./NinethSection.tsx";
import ScollethSection from "./ScollethSection.tsx";
import "./home.css";
import Auction from "./Auction.tsx";

function Home() {

  
  return (
    <>
      <Navbar />
      <Header />
      <LogoSection />
      <ProductSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Auction />
      <NumberSection />
      <NinethSection />
      <ScollethSection />
      <Footer />
    </>
  );
}

export default Home;
