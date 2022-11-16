import React from 'react';

import Section from './Section';

const VideoBackground = ({ src, posterSrc, children }) => (
  <Section fullsize>
    <video loop muted autoPlay playsInline poster={posterSrc}>
      <source src={src} type="video/mp4" />
    </video>
    <div className="fullsize-section__content-wrapper">{children}</div>
  </Section>
);

export default VideoBackground;
