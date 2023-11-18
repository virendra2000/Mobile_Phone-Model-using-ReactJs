import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Notify from './Components/notify';
import realmetxt from './assets/realme.webp';
function App() {
  return (
    <>
        <div className="home-content flex flex-row items-center justify-between">
          <div className="p-1 h-[500px] w-[280px] bg-black rounded-3xl flex flex-col items-center justify-center">
            <div className="main h-[480px] w-[270px] bg-white rounded-3xl">
              <Notify />
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
          <div className='row2'>
            <img src={realmetxt} alt="" className='h-[300px]' />
          </div>
        </div>
    </>
  )
}

export default App
