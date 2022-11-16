import React from 'react';

import { Media } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image';

export const NewsItem = ({ img, content, date, className = '' }) => (
  <Media className={classNames('news-item', className)}>
    <GatsbyImage image={img.childImageSharp.gatsbyImageData} className="mr-2" alt="" />
    <Media.Body>
      <p>{content}</p>
      <span>{date}</span>
    </Media.Body>
  </Media>
);
