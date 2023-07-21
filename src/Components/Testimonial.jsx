import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Pic from "./personImages/9.jpg";
import PicTwo from "./personImages/4.jfif";
import PicThree from "./personImages/5.jfif";
import PicFour from "./personImages/1.jfif";
import PicFive from './personImages/2.jfif';




const Testimonial=()=>{
    return(
      <>
            
            

    <Carousel className='bg'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic}
          alt="First slide"
        />
        <Carousel.Caption>
        <img src={PicTwo} alt="personimg" className=" photo "  />
          <h3>Glassipreet Riar</h3>
          <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
          <p>"I am absolutely blown away by the level of service I received! The team went above and beyond to ensure that my needs were met, and I could not be happier with the result."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic}
          alt="Second slide"
        />

        <Carousel.Caption>
        <img src={PicFour} alt="personimg"  className=" photo " />
          <h3>Tinkujeet Sandhu</h3>
          <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
          <p>"The level of attention to detail is truly remarkable. I was impressed with every aspect of the service, from the initial consultation to the final product. I cannot imagine going anywhere else."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic}
          alt="Third slide"
        />

        <Carousel.Caption>
        <img src={PicThree} alt="personimg"  className=" photo " />
          <h3>Pistol Singh</h3>
          <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
          <p> "This service is simply amazing. The team's commitment to quality and customer satisfaction is unparalleled, and I would not hesitate to recommend them to anyone in need of their services."</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Pic}
          alt="Third slide"
        />

        <Carousel.Caption>
        <img src={PicFive} alt="personimg"  className=" photo " />
          <h3>Jeniferjeet Kaur</h3>
          <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
          <p>"The team was incredibly responsive and communicative throughout the process. They listened to my needs and worked tirelessly to ensure that I was completely satisfied with the outcome."</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    
    
    </>
        
    )
};


export default Testimonial;
