import React from 'react';

import { Link } from 'gatsby';
import { GatsbyLinkProps } from 'gatsby-link';
import { useIntl } from 'react-intl';

import { localizedPath } from '../utils';

const LocaleLink: React.FC<GatsbyLinkProps> = (props) => {
  const { locale, defaultLocale } = useIntl();
  return <Link {...props} to={localizedPath(defaultLocale, locale, props.to)} />;
};

export default LocaleLink;
