import React, { useState } from 'react';
import Navbar from './Components/Navbar';

const App = () => {
  const [mode, setMode] = useState(true); // Start with dark mode as false

  const handleImgClick = () => {
    setMode(prevMode => !prevMode); // Toggle the mode
  };

  return (
    <div className={`w-full min-h-screen ${mode ? 'bg-zinc-800' : 'bg-white'}`}>
        <Navbar mode={mode} />
      <div className="image m-16 w-20 h-28 flex justify-items-center">
        <img 
          src="https://www.svgrepo.com/show/59274/light-bulb.svg" 
          alt="Toggle Mode" 
          onClick={handleImgClick} 
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default App;
