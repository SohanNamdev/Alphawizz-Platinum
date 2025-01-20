import React from 'react'
import Nav from './components/Nav'
import Nav2 from './components/Nav2'
import Slider from './components/Slider'
import Page1 from './components/Page1'

import CardContainer from './components/CardContainer'
import Lowerbox from './components/Lowerbox'
import Features from './components/Features'
import Footer from './components/Footer'

// import CaredDetail from './components/CaredDetail'
// import { CartContext } from './components/CartContext'
// import CardSection from './components/CardSection'



const App = () => {
  return (
    <>
    <Nav />
    <Nav2 />
    <Slider />
    <Page1 />
    
    <CardContainer />
    <CardContainer />
    <Lowerbox />
    <Features />
    <Footer />
   {/* <CaredDetail /> */}
   {/* <CartContext /> */}
   {/* <CardSection /> */}
    
    </>
  )
}

export default App