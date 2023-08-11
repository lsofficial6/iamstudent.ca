


// this drawer is used with NPM named    "react modern drawer"

import React from 'react'
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import component 👇
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'

const NewDrawer = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <button onClick={toggleDrawer} className='btn btn-primary position-fixed bottom-0 end-0 m-3 '><i class="bi bi-list "></i></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
            <div  className='pt-5 ps-1 ms-1 mt-5 d-flex flex-column'>
                <div className='display-6 py-3'>Hello Dear! </div>
               
                <NavLink className="nav-link border-bottom p-1" to="/"><i class="bi bi-house"></i> Home</NavLink>
          <NavLink className="nav-link border-bottom p-1" to="aboutus"><i class="bi bi-file-person-fill"></i>About Us</NavLink>
          <NavLink className="nav-link border-bottom p-1" to="employees"><i class="bi bi-person-lines-fill"></i>Our Employees</NavLink>
          
          <NavDropdown title="SignIn/SignUp" id="collasible-nav-dropdown" className='border-bottom p-1 ps-4'>
              <NavDropdown.Item><NavLink className="nav-link border-bottom" to="signin">Signin</NavLink></NavDropdown.Item>

              <NavDropdown.Item >
              <NavLink className="nav-link" to="signup">Signup</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          
          <NavDropdown title="Reach Us" id="collasible-nav-dropdown" className='border-bottom p-1 ps-4'>
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
                </div>
            </Drawer>
        </>
    )
}

export default NewDrawer;