import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "../Components/Home";
import ContactUs from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";
import SignIn from "../Components/signin-signup/SignIn";
import SignUp from "../Components/signin-signup/Signup";
import Card from "../Components/Employe";
import Thankyou from "../Components/Thankyou";

// bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import EnquireNow from "../Components/EnquireNow";

import CA from '../images/canada.svg'




const Header=()=>{
  return(
    <>

<BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
        <Route path="" element={<Home/>}/>
        <Route path="/iamstudent.ca" element={<Home/>}/>
        <Route path="/iamstudent.ca/" element={<Home/>}/>
        <Route path="iamstudent.ca/" element={<Home/>}/>
        <Route path="redirect" element={<Navigate to="home"/>}/>
        
        <Route  path="signin" element={<SignIn/>}/>
        <Route  path="signup" element={<SignUp/>}/>
        <Route  path="aboutus" element={<AboutUs/>}/>
        <Route  path="contactus" element={<ContactUs/>}/>
        <Route  path="enquirenow" element={<EnquireNow/>}/>
        <Route  path="employees" element={<Card/>}/>
        <Route  path="thankyou" element={<Thankyou/>}/>
        
      </Routes>
        
    
    












<Navbar collapseOnSelect expand="lg"  className="rounded glass position-fixed  container-fluid top-0 ">
      <Container>
      
        <Navbar.Brand  className="display-6"><NavLink to="" className="nav-link display-1"> www.iamstudent.CA <img src={CA} alt="" className="logheight" /></NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="aboutus">About Us</NavLink>
          <NavLink className="nav-link" to="employees">Our Employees</NavLink>
            

          
          <NavDropdown title="SignIn/SignUp" id="collasible-nav-dropdown">
              <NavDropdown.Item><NavLink className="nav-link border-bottom" to="signin">Signin</NavLink></NavDropdown.Item>

              <NavDropdown.Item >
              <NavLink className="nav-link" to="signup">Signup</NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            
            <NavDropdown title="Reach Us" id="collasible-nav-dropdown">
              <NavDropdown.Item><NavLink className="nav-link" to="contactus">Contact Us</NavLink></NavDropdown.Item>
              <NavDropdown.Item >
              <NavLink className="nav-link" to="enquirenow">Enquire Now</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item ><NavLink className="nav-link" to="contactus">Feedback</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Legal Advisory
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>


</BrowserRouter>


</>)
} 

export default Header;


