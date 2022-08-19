import './App.css';
import Home from './pages/Home.js';
import Vision from './pages/Vision.js';
import Team from './pages/Team.js';
import FAQ from './pages/FAQ.js';
import Mint from './pages/Mint.js';
import { Route, Routes } from "react-router-dom"
import NavBar from './pages/NavBar.js';
import Footer from './pages/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/vision" element={<Vision />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/mint" element={<Mint />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
