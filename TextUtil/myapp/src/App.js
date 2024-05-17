
import './App.css';
import Textform from './Components/Textform';
import About  from './Components/About'
import Layout  from './Components/Layout'
import Service from './Components/Service'
import Nopage from './Components/Nopage'
import Footer from './Components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import {Routes, Route } from "react-router-dom";


function App() {
  return (
 <>

 <Layout/>
      <Routes>
          <Route path="/" element={<Textform tittle="Text utils"/>} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="*" element={<Nopage />} />
        
      </Routes>
     
    
   <Footer/>
 </>
  );
}

export default App;
