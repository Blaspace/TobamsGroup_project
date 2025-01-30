import React, {useEffect} from 'react';
import Home from './pages/home/Home.tsx';
import aos from 'aos'
import {Routes, Route} from 'react-router-dom';
import About from './pages/about/About.tsx';
import 'aos/dist/aos.css'

function App() {

  useEffect(()=>{
    aos.init()
  }, [])
  return (
    <Routes>
    <Route index element={<Home/>}/>
    <Route path='/single' element={<About/>}/>
    </Routes>
  );
}

export default App;
