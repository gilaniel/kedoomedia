import React from 'react';

// import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';

import { Container, Table } from 'react-bootstrap';

import SEO from '../../components/commons/Seo';
import Footer from '../../components/commons/Footer';
import Section from '../../components/commons/Section';
import Link from '../../components/LocaleLink';

import useScrollTo from '../../hooks/useScrollTo';

const CookiesContent = () => {
  // const pageData = useStaticQuery(graphql`
  //   query CookiesPageQuery {
  //   }
  // `);

  const { formatMessage } = useIntl();
  const [footerRef, scrollToFooter] = useScrollTo(null);

  return (
    <>
      <SEO title={formatMessage({ id: 'cookies.title' })} className="kedoo-help" />
      <main className="pb-3">
        <Section>
          <Container>
            <h2>Use of cookies by Kedoo.com</h2>
            <p>
              Cookies are small text files that are placed in Your computer web browser memory. They
              are widely used in order to make websites work, or work more efficiently, as well as
              to provide information to the owners of the site. The table below explains the cookies
              we use and why.
            </p>
            <Table hover>
              <tbody>
                <tr>
                  <th>Cookie</th>
                  <th>Name</th>
                  <th>Purpose</th>
                </tr>
                <tr>
                  <td>Universal Analytics (Google)</td>
                  <td>_ga</td>
                  <td>
                    These cookies are used to collect information about how visitors use our
                    website. We use the information to compile reports and to help us improve the
                    website. The cookies collect information in an anonymous form, including the
                    number of visitors to the website and blog, where visitors have come to the
                    website from and the pages they visited.
                    <br />
                    <a href="https://support.google.com/analytics/answer/6004245">
                      <u>Read Google's overview of privacy and safeguarding data</u>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Yandex Metrika</td>
                  <td>_ym_d</td>
                  <td>
                    These cookies are used to shoe the date of first visit of Kedoo.com by User
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>_ym_uid</td>
                  <td>Shows Client ID on Yandex.Metrika</td>
                </tr>
                <tr>
                  <td></td>
                  <td>_ym_isad</td>
                  <td>Checking if user have any AdBlocks on</td>
                </tr>
              </tbody>
            </Table>
            <p>
              <strong>How To Manage Cookies</strong>
            </p>
            <p>
              For non-essential cookies, we obtain your consent before installing them. Your web
              browser may allow You to change Your cookie preferences after you have made a
              selection (for example if you consent and then change your mind and want to delete and
              disable Kedoo cookies). Please consult the help section of Your web browser or follow
              the links below to understand Your options, but please note that if You choose to
              disable the cookies, some features of our website or Services may not operate as
              intended.
            </p>
            <ul>
              <li>
                <p>
                  Chrome:{' '}
                  <a href="https://support.google.com/chrome/answer/95647?hl=en">
                    https://support.google.com/chrome/answer/95647?hl=en
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Explorer:{' '}
                  <a href="https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies">
                    https://support.microsoft.com/en-us/help/17442/windows-internet-explorer-delete-manage-cookies
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Safari:{' '}
                  <a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac">
                    https://support.apple.com/en-gb/guide/safari/sfri11471/mac
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Firefox:{' '}
                  <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
                    https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences
                  </a>
                </p>
              </li>
            </ul>
            <p>
              For information on how we process personal data and your wider rights in relation to
              personal data processing, see our <Link to="/help/privacy">Privacy Policy</Link>.
            </p>
          </Container>
        </Section>
      </main>
      <Footer ref={footerRef} />
    </>
  );
};

export default CookiesContent;
