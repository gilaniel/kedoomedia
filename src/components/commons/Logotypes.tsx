import React from 'react';
// import Slider from 'react-slick';
import classNames from 'classnames';

import { Row, Col } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image';

// const Logotypes = ({ items }) => (
//   <Slider
//     className="slick-centered-items"
//     adaptiveHeight
//     speed={500}
//     // infinite={false}
//     variableWidth
//     swipeToSlide
//     arrows={false}
//     responsive={[
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true
//         }
//       }
//     ]}
//   >
//     {items.map(({ title, src }, i) => (
//       <div key={i} className="mr-2 p-1">
//         <Image fluid src={src} alt={title} />
//       </div>
//     ))}
//   </Slider>
// );

const Logotypes = ({ items, isChecker = false }) => (
  <Row className="d-flex align-items-center">
    {items.map(({ title, image }, i) => (
      <Col key={i} xs={6} md={4} lg>
        <div
          className={classNames('p-1 text-center', {
            'pt-lg-4': isChecker && i % 2,
            'pb-lg-4': isChecker && !(i % 2)
          })}
        >
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt={title}
          />
        </div>
      </Col>
    ))}
  </Row>
);

export default Logotypes;
