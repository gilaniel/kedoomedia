import React from 'react';
import Slider from 'react-slick';

import { NewsItem } from './NewsItem';

export const NewsItems = ({ items }) => (
  <Slider
    className="d-flex align-items-start py-2 mb-2"
    adaptiveHeight
    speed={500}
    infinite={false}
    // variableWidth
    swipeToSlide
    // arrows={false}
    slidesToShow={2}
    // dots
  >
    {items.map((item, i) => (
      <NewsItem
        key={item.id}
        className="mr-2"
        img={item.main_picture}
        content={item.title}
        date={item.published_time}
      />
    ))}
  </Slider>
);
