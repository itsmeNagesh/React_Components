import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from 'react'
import Home from "./pages/Home";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<layout />}>
          <Route index element={<Home />} />
          <Route path="blog" element={<blog />} />
          <Route path="contact" element={<contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



