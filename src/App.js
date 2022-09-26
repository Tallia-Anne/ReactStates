import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from './Components/Header'
import Compteurs from './Components/Compteurs/index';
import Home from './Components/Home';
import Selecteur from './Components/Selecteur';
import Toggle from './Components/Toggle';
import Move from './Components/Move'
import Modale from './Components/Modale'
import Converters from './Components/Converters'
import Configurateur from './Components/Configurateur'

function App() {
  return (
   
     
        
       
        <BrowserRouter>
        <Header/>
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="compteurs" element={<Compteurs />} />
        <Route path="selecteur" element={<Selecteur />} />
        <Route path="toggle" element={<Toggle />} />
        <Route path="move" element={<Move />} />
        <Route path="modale" element={<Modale />} />
        <Route path="converters" element={<Converters />} />
        <Route path="configurateur" element={<Configurateur />} />
          </Routes>
        </BrowserRouter>
       
     

  );
}

export default App;
