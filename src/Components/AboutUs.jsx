import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AboutUs() {
    return (
        <>
        <Container className="my-5">
                {/* <h1 className=" display-3 text-center" data-aos="zoom-in-up"> This is about us page</h1> */}


           <Row className="pt-3"> 
  <Col className="  my-auto pe-5">
    
    <h2 className="display-4 text-left strong fw-bold"> www.iamstudent.CA</h2>
    <p className="text-justify"> iamstudent.CA is a comprehensive platform designed to cater to all the needs of students. Whether you're a high school student looking to get into college, a college student searching for internships, or a graduate student preparing for your career, iamstudent.CA has got you covered.</p>
        
    </Col>
    <Col>
    <h2><i class="bi bi-info-circle-fill"></i> Our Services</h2>
    <p>Our platform provides a range of services and resources that are tailored to meet the needs of students. From career advice and interview tips to scholarship opportunities and study guides, we have everything you need to succeed.</p>
    <h2><i class="bi bi-info-circle-fill"></i> information and resources </h2>
    <p>At iamstudent.CA, we understand that navigating the academic world can be overwhelming at times. That's why we have created a user-friendly platform that makes it easy for students to access the information and resources they need, all in one place..</p>
    <h2><i class="bi bi-info-circle-fill"></i> Expert Team</h2>
    <p>Our team of experts is constantly updating the platform with the latest information, so you can be sure that you're getting the most accurate and up-to-date information available.</p>

    </Col>
    </Row>
  </Container>
  
</>

            );

}