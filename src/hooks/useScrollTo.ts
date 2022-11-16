import React from 'react';

const useScrollTo = (state: any) => {
  const refEl = React.useRef(state);
  const scrollToBottom = () => refEl.current.scrollIntoView({ behavior: 'smooth' });
  return [refEl, scrollToBottom];
};

export default useScrollTo;
