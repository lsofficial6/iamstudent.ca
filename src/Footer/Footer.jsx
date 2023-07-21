import React from "react";
import NewDrawer from "../Components/CustomDrawer";
import { BrowserRouter } from "react-router-dom";


const Footer=()=>{
    return(
        <>
        <BrowserRouter>
        <footer className="border-top container_fluid text-center align-items-center justify-content-center d-flex text-lg-start mt-5">
    <section
  data-bs-version="5.1"
  className="footer2 cid-tyQE8Whrxj"
  once="footers"
  id="footer2-1v"
>
  <div className="container d-flex align-center">
    <div className="row container_fluid d-flex">
 
      <div className="col-6 col-md-4 col-lg-3">
        <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 ">
          <strong>Links</strong>
        </h5>
        <ul className="list mbr-fonts-style ">
          <li className="mbr-text item-wrap">Home</li>
          <li className="mbr-text item-wrap">Our employees</li>
          <li className="mbr-text item-wrap">Login</li>
          <li className="mbr-text item-wrap">Signup</li>
        </ul>
      </div>
      <div className="col-6 col-md-4 col-lg-3">
        <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 ">
          <strong>Organisatons</strong>
        </h5>
        <ul className="list mbr-fonts-style ">
          <li className="mbr-text item-wrap">Khalsa Aid</li>
          <li className="mbr-text item-wrap">Sikh student fedration</li>
          <li className="mbr-text item-wrap">London student Union</li>
          
        </ul>
      </div>
      <div className="col-6 col-md-4 col-lg-3">
        <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 ">
          <strong>useful Links</strong>
        </h5>
        <ul className="list mbr-fonts-style ">
          <li className="mbr-text item-wrap">Assignment Guru</li>
          <li className="mbr-text item-wrap">Legal Help</li>
          <li className="mbr-text item-wrap">Financial Assistance</li>
          <li className="mbr-text item-wrap">Carrer </li>
          
        </ul>
      </div>
      <div className="col-6 col-md-4 col-lg-3">
        <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 ">
          <p>
            <strong>&nbsp;</strong>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Help</strong>
          </p>
        </h5>
        <ul className="list mbr-fonts-style ">
          <li className="mbr-text item-wrap">Help Center</li>
          <li className="mbr-text item-wrap">Carrier</li>
          <li className="mbr-text item-wrap">Mentorship</li>
          
        </ul>
      </div>
      
      
      <div className="text-center p-3 border-top">
        ©2023 copyrights Reserved www.iamstudent.uk
       
      </div>
    </div>
  </div>
</section>

    </footer>
</BrowserRouter>

        </>
    );
};
export default Footer;
