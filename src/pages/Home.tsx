import React from "react";
import Navbar from "../component/Navbar.tsx";
import Header from "../component/Header.tsx";
import Footer from "../component/Footer.tsx";
import LogoSection from "../component/Logosection.tsx";
import ProductSection from "../component/ProductSection.tsx";
import FourthSection from "../component/FourthSection.tsx";
import FifthSection from "../component/FifthSection.tsx";
import SixthSection from "../component/SixthSection.tsx";
import SeventhSection from "../component/SeventhSection.tsx";
import NumberSection from "../component/NumberSection.tsx";
import NinethSection from "../component/NinethSection.tsx";
import ScollethSection from "../component/ScollethSection.tsx";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <LogoSection/>
      <ProductSection/>
      <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <SeventhSection/>
      <NumberSection/>
      <NinethSection/>
      <ScollethSection/>
      <Footer />
    </>
  );
}

export default Home;
