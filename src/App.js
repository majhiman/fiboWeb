import './App.css';
import Home from './components/Home';
import Registration from './components/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration/>}/>
          <Route path="home" element={<Home/>}/>
        </Routes>        
      </BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
