import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Audit_number from './Pages/Audit_Number';
import Ncr_create from './Pages/Ncr_create';
import Update_Ncr from './Pages/Update_Ncr';
import Ncr_detail from './Pages/Ncr_detail';
import "./App.css"
import Home from './Pages/Home';
import Sign from './Pages/Sign';
import Register from './Pages/Register';


function App() {
   

  return (
    
    
    <div>
      
        

      <BrowserRouter>
      <Routes>
         
         <Route path="/" element={<Home/>}/>
         <Route path="/Auditor_number" element={<Audit_number/>}/>
         <Route path="/Ncr_create" element={<Ncr_create/>}/> 
         <Route path="/Ncr_detail/:id" element={<Ncr_detail/>}/>
         <Route path="/Update/:id" element={<Update_Ncr/>}/>
         <Route path="/register" element={<Register/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>

  );
}

export default App;
