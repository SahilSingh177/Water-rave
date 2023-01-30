import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';
export default function Slider() {
  return (
    <>
    <div style={{marginTop: "70px"}}>
        <Carousel fade="true" width="400px" variant="light">
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://media.gettyimages.com/photos/thirsty-child-drinking-water-on-water-pump-picture-id1141690680?k=20&m=1141690680&s=612x612&w=0&h=s0txTJUCL8XmDxRqsCGRkvXsbmO3DfCknNMG1ZAlV9w="
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/6738452/pexels-photo-6738452.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
  <img
      className="d-block w-100"
      src="https://thumbs.dreamstime.com/b/water-crisis-india-women-carrying-drinking-water-far-more-distance-purulia-india-water-crisis-burning-issue-109876905.jpg"
      alt="Third slide"
    />
    
    </Carousel.Item>
    <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://media.gettyimages.com/photos/brick-factories-on-the-brahmaputra-delta-bangladesh-picture-id1145891317?k=20&m=1145891317&s=612x612&w=0&h=7DAqfFJaTUWiIhx47Lk0ajJ-Pr8Vgh-hcOLqH8HLmPw="
      alt="Fourth slide"
    />
    
    </Carousel.Item>
    <Carousel.Item interval={3000}><img
      className="d-block w-100"
      src="https://preview.redd.it/xmtmb2bkz4h91.jpg?width=640&crop=smart&auto=webp&s=bfd8a3e449712277e9908336393140bd5c244272"
      alt="Fifth slide"
    />
  </Carousel.Item>
  </Carousel>
    </div>
    </>
  );
}
