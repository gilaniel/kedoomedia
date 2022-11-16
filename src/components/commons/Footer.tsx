import React from 'react';

import { Container, Image } from 'react-bootstrap';
import classNames from 'classnames';

import Section from './Section';
import ContactForm from './ContactForm';
import SocialIcon from './SocialIcon';

import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import Link from '../LocaleLink';

import KedooImg from '../../images/logo.png';
import KedooWhiteImg from '../../images/logo-white.png';

const Menu = ({ items, className = '' }) => {
  const { formatMessage } = useIntl();
  const itemsLength = items.length;
  return (
    <ul className={classNames('list-inline', className)}>
      {items.map(({ href, title }, i) => (
        <li key={i} className={classNames('list-inline-item', { 'mr-2': i + 1 !== itemsLength })}>
          <Link to={href}>{formatMessage({ id: title })}</Link>
        </li>
      ))}
    </ul>
  );
};

const SocialContacts = ({ items }) => (
  <ul className="list-inline">
    {items.map(({ href, title, icon }, i) => (
      <li key={i} className="list-inline-item mr-2">
        <a href={href}>
          <SocialIcon icon={icon} /> {title}
        </a>
      </li>
    ))}
  </ul>
);

const Footer = React.forwardRef(({ variant = 'outline-light', hasSocialContacts = false }, ref) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          copyrightTitle
          pageLinks {
            href
            title
          }
          footerLinks {
            href
            title
          }
          socialContacts {
            href
            title
            icon
          }
        }
      }
    }
  `);

  const { formatMessage } = useIntl();

  const socialContacts = site.siteMetadata.socialContacts;

  return (
    <footer className="py-2" ref={ref}>
      <Section>
        <Container>
          <div className="mb-3">
            <h2>{formatMessage({ id: 'footer.contact_us.title' })}</h2>
            <ContactForm buttonVariant={variant} />
          </div>

          {hasSocialContacts ? (
            <div className="d-md-flex align-items-center justify-content-between">
              <div>
                <h2 className="footer-logotype">
                  <Image
                    fluid
                    src={variant === 'outline-light' ? KedooWhiteImg : KedooImg}
                    alt={site.siteMetadata.title}
                  />
                </h2>
                {/* <h2>{site.siteMetadata.title}</h2> */}
                <Menu items={site.siteMetadata.pageLinks} />
                <Menu className="mb-3 mb-md-0" items={site.siteMetadata.footerLinks} />
              </div>
              <div>
                <h2>{formatMessage({ id: 'footer.write_us.title' })}</h2>
                <SocialContacts items={socialContacts} />
              </div>
            </div>
          ) : (
            <>
              <h2 className="footer-logotype">
                <Image
                  fluid
                  src={variant === 'outline-light' ? KedooWhiteImg : KedooImg}
                  alt={site.siteMetadata.title}
                />
              </h2>
              {/* <h2>{site.siteMetadata.title}</h2> */}
              <div className="d-md-flex align-items-center justify-content-between">
                <Menu className="mb-1 mb-md-3" items={site.siteMetadata.pageLinks} />
                <Menu className="mb-3" items={site.siteMetadata.footerLinks} />
              </div>

              <div className="text-md-right">
                &copy;
                {formatMessage(
                  { id: 'footer.copyright' },
                  {
                    title: site.siteMetadata.copyrightTitle,
                    year: new Date().getFullYear()
                  }
                )}
              </div>
            </>
          )}
        </Container>
      </Section>
    </footer>
  );
});

export default Footer;
