import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Audit_number from './Pages/Audit_Number';
import Login from './Pages/Home';
import Ncr_create from './Pages/Ncr_create';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Login/>}/>
         <Route path="/Ncr_create" element={<Ncr_create/>}/> 
         <Route path="/Auditor_number" element={<Audit_number/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
