import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Header from './component/header';
import Footer from './component/footer';

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
