import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
import './index.css';
import Layout from './Layout';
import Home from './component/home';
import Productdetail from './component/shop/Productdetail';
import Category from './component/shop/category';
import Contact from "./component/contact";
import NoPage from "./component/nopage";
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Bloglist from './component/blog/Bloglist';
import Postdetails from './component/blog/Postdetails';
import About from './component/about';

export default function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productdetail" element={<Productdetail />} />
          <Route path="category" element={<Category />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path="bloglist" element={<Bloglist />} />
          <Route path='postdetail' element={<Postdetails />} />
          <Route path='about' element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);