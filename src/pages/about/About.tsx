import React from 'react'
import Navbar from '../../component/Navbar.tsx'
import Footer from '../../component/Footer.tsx'
import Auction from './Auction.tsx'
import Header from './Header.tsx'

const About =()=>{
    return(
        <>
        <Navbar/>
        <Header/>
        <Auction/>
        <Footer/>
        </>
    )
}

export default About