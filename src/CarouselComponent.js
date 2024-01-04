import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponent.css';

//Création de mon slider
function CarouselComponent() {
  return (
    <Carousel>
      <Carousel.Item>
      <img
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide1.webp")}
          alt="First slide"
      />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide2.webp")} 
          alt="Second slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={require("./assets/imagesEtLogo/images/slide3.webp")}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselComponent;