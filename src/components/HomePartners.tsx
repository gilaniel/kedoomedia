import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image';

const HomePartners = ({ items }) => (
  <Row>
    {items.map(({ title, image }, i) => (
      <Col key={i} xs={6} md={3} className="d-flex justify-content-center align-items-center">
        <div className="py-2 w-100 text-center">
          <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={title} />
        </div>
      </Col>
    ))}
  </Row>
);

export default HomePartners;
