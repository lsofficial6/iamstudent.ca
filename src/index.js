import React from "react";
import  ReactDOM  from "react-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import NewDrawer from "./Components/CustomDrawer";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import Home from "./Components/Home";



ReactDOM.render(
    <>
    <Header/>
    <BrowserRouter>
    <Home/>
    <NewDrawer/>
    </BrowserRouter>
    <Footer/>
    </>
,document.getElementById("root"));