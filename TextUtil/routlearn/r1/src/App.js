import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import TextUlit from './Pages/TextUlit'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout />}>
        <Route index element={<TextUlit />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </>

  );
}

export default App;
