import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './pages/HomePage';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>   
      </BrowserRouter>
      
    </div>
  )
}

export default App
