import { useState } from 'react'
import'./commonResource/css/styles.css'
import'./commonResource/css/bootstrap.css'
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Alert from './Components/Alert.jsx';
import FirstSection from './Components/FirstSection.jsx';
import SecondSection from './Components/SecondSection.jsx';
import ThirdSection from './Components/ThirdSection.jsx';
import FourthSection from './Components/FourthSection.jsx';
import FifthSection from './Components/FifthSection.jsx';
import SixthSection from './Components/SixthSection.jsx';


function App(){ 

  return (
  
      <div>
       <Header/>
      <Alert/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
     <FourthSection/>
      <FifthSection/>
      <SixthSection/>
      <Footer/>
    </div>
  );
}

export default App;


