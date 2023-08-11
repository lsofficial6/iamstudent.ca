
import React from 'react';
import { Col, Row} from "react-bootstrap";


function FollowUs() {
  return (
    
    <Row className="display-flex container py-5 my-5">
      <Col className="text-center mx-5 px-5">
        <strong className='display-2'>Follow us </strong>
        <p className="display-6">Get regular updates by following us</p>
      </Col>
      <Col className="icon-container display-4 d-flex justify-content-center py-4">
        <a href="https://twitter.com/" className='px-2' target="_blank" rel="noopener noreferrer">
        <i class="bi bi-twitter"></i>
        </a>
        <a href="https://instagram.com/" className='px-2' target="_blank" rel="noopener noreferrer">
        <i class="bi bi-instagram"></i>
        </a>
        <a href="https://linkedin.com/" className='px-2' target="_blank" rel="noopener noreferrer">
        <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://plus.google.com/" className='px-2' target="_blank" rel="noopener noreferrer">
        <i class="bi bi-youtube"></i>
        </a>
      </Col>
    </Row>
    
  );
}

export default FollowUs;