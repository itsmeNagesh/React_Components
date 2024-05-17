
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from './Pages/List'
import Form from './Pages/Form'
import Home from './Pages/Home'
import Nopage from './Pages/Nopage'
import Layout from './Pages/Layout';
import Routing from './Pages/Routing';
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="Routing" element={<Routing/>} />
          <Route path="Form" element={<Form/>} />
          <Route path="List" element={<List />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
   
    </>
  
  );
}

export default App;
