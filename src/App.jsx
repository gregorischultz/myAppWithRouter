import { useState } from 'react'
import './App.css'
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  const [currentLocation, setCurrentLocation] = useState ("/")

  return (
    <>
      <nav>
        <button onClick={() => setCurrentLocation("/")} type='button'>Home</button>
        <button onClick={() => setCurrentLocation("/about")} type='button'>About</button>
      </nav>
      <main>
        {currentLocation === "/" && <Home/>}
        {currentLocation === "/about" && <About/>}
      </main>
    </>
  );
}

export default App
