import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IntlProvider } from 'react-intl';

import { getCurrentLangKey } from 'ptz-i18n';

import Header from './commons/Header';
// import CookiesPolicyModal from './CookiesPolicyModal';

import enMessages from '../intl/en';
import ruMessages from '../intl/ru';

type LayoutLocale = 'en' | 'ru';

type LayoutProps = {
  locale?: LayoutLocale;
  location: Location;
};

function getLocaleMessages(locale: LayoutLocale): Record<string, string> {
  if (locale === 'ru') return ruMessages;
  return enMessages;
}

const Layout: React.FC<LayoutProps> = ({ children, location, locale = 'en' }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          i18nLocales {
            defaultLocale
            locales
          }
        }
      }
    }
  `);

  const messages = getLocaleMessages(locale);

  const { locales, defaultLocale } = data.site.siteMetadata.i18nLocales;
  const currentUserLocale = getCurrentLangKey(locales, defaultLocale, location.pathname);

  return (
    <IntlProvider defaultLocale={defaultLocale} locale={currentUserLocale} messages={messages}>
      <Header siteTitle={data.site.siteMetadata.title} location={location} />
      {children}
      {/* <CookiesPolicyModal /> */}
    </IntlProvider>
  );
};

export default Layout;
