import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './component/header';
import Header from './component/header';
import Home from './component/home';
import Footer from './component/footer';
import Category from './component/shop/category';
import Contact from "./component/contact";
import NoPage from "./component/nopage";

function App() {
   return (
  <>
    
   


  
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Category />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
 

   
    </>
  );
}

export default App;
