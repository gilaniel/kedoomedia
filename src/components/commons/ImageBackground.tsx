import React from 'react';

import Section from './Section';

const ImageBackground = ({ children }) => (
  <Section fullsize>
    {/* <div className="fullsize-section__image" /> */}
    <div className="fullsize-section__content-wrapper">{children}</div>
  </Section>
);

export default ImageBackground;
