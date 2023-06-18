import React from 'react';
import { Outlet } from 'react-router-dom';
import {Toaster} from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        <main style={{minHeight:"70vh"}}>{children}</main>
        <Toaster />
        <Footer/>
    </div>
  )
}

export default Layout