import React from 'react';
import NavBar from './components/Slider';
import ContactScreen from './components/Contact/contactScreen';
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="flex">
      <div className='w-[20%]'>
        <NavBar />
      </div>

      {/* <Outlet/> */}
      <div className="w-[80%] mt-10 mr-10">
        <Outlet />
      </div>
    </div >
  );
}

export default App;
