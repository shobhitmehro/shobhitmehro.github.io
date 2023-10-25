import React from 'react';

import { Footer, Header, Hobbies, Skills, Works } from './container';
import { Navbar } from './components';
import './App.scss'



const App = () => {
  return (
    <div className='app' >
        {<Navbar />}
        <Header />
        <Skills />
        <Works />
        <Hobbies />
        <Footer />


    </div>
  );
}

export default App;