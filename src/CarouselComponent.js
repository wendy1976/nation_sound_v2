import React, { memo, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const CarouselComponent = memo(function CarouselComponent() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preload" as="image" href={require("./assets/imagesEtLogo/images/slide1.webp")} />
      </Helmet>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {/* Slide 1 */}
        <Carousel.Item>
          {index === 0 && <img
            className="d-block img-fluid"
            src={require("./assets/imagesEtLogo/images/slide1.webp")}
            alt="First slide"
            width="1920"
            height="1080"
          />}
          <Carousel.Caption>
            {/* Image du slide 1 */}
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          {index === 1 && <img
            className="d-block img-fluid"
            src={require("./assets/imagesEtLogo/images/slide2.webp")}
            alt="Second slide"
            width="1920"
            height="1080"
          />}
          <Carousel.Caption>
            {/* Image du slide 2 */}
          </Carousel.Caption>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          {index === 2 && <img
            className="d-block img-fluid"
            src={require("./assets/imagesEtLogo/images/slide4.webp")}
            alt="Fourth slide"
            width="1920"
            height="1080"
          />}
          <Carousel.Caption>
            {/* Image du slide 3 */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </HelmetProvider>
  );
});

export default CarouselComponent;