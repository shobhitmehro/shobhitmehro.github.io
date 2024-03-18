import React from 'react';

import { Footer, Header, Hobbies, Skills, Works } from './container';
import { Navbar } from './components';
import './App.scss'
import Experience from './container/Experience/Experience';



const App = () => {
  return (
    <div className='app' >

      <Navbar />
        <Header />
        <Skills />
        <Experience/>

        <Works />
        <Hobbies />
  <Footer /> 


    </div>
  );
}

export default App;