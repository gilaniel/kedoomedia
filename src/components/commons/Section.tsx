import React from 'react';
import classNames from 'classnames';

const Section = ({ className = '', big = false, fullsize = false, children }) => {
  const sectionRef = React.useRef(null);

  const scrollToNext = () => {
    window.scrollTo({ top: sectionRef.current.offsetHeight, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className={classNames({
        'fullsize-section': fullsize,
        'px-md-2': !fullsize,
        'py-2': !fullsize && !big,
        'py-3': !fullsize && big
      }, className)}
    >
      {children}
      {fullsize && <span className="fullsize-scroller" onClick={scrollToNext} />}
    </section>
  );
};

export default Section;
