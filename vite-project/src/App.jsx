import React from 'react';
import Header from './component/Header';

import Services from './component/Services'
import ImageColumn from './component/ImageColumn';
import ImageColumns from './component/ImageColumns';
import Column1 from './component/Column1';
import Salon from './component/Salon';
import Spa from './component/Spa';
import Cleaning from './component/Cleaning';
import Ac from './component/Ac';
import Quick from'./component/Quick';
import Mens from './component/Mens'
import SalonMen from './component/SalonMen';

import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <SliderColumn /> */}
      {/* Other components can go here */}
      <Services />
      <ImageColumn/>
      <ImageColumns/>
      <Column1/>
      <Salon/>
      <Spa/>
      <Cleaning/>
      <Ac/>
      <Quick/>
      <Mens/>
      <SalonMen/>
     
      <Footer/>
      
     
      </div>
  );
}

export default App;






