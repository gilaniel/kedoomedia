import React from 'react';
import classNames from 'classnames';

const SocialIcon = ({ icon, isWhite = false }) => {
  let iconClassName = `${icon}-icon`;
  if (isWhite) iconClassName += '-white';
  return <span className={classNames('social-icon', iconClassName)}></span>;
};

export default SocialIcon;
