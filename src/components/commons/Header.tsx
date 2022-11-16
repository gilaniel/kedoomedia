import React from "react";

import { Container, Navbar, Nav, Image } from "react-bootstrap";

import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "react-intl";

import LocaleLink from "../LocaleLink";

import KedooImg from "../../images/logo.svg";
import KedooImgM from "../../images/media/tr-media.png";

const Header = () => {
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
          i18nLocales {
            locales
          }
        }
      }
    }
  `);

  const { formatMessage } = useIntl();

  return (
    <Navbar bg="white" expand="lg" sticky="top" className="text-uppercase">
      <Container>
        <Navbar.Brand to="/" as={LocaleLink}>
          <Image
            fluid
            src={KedooImg}
            alt={site.siteMetadata.title}
            className="logo"
          />
          <Image
            fluid
            src={KedooImgM}
            alt={site.siteMetadata.title}
            width="20px"
            className="logo-m"
          />
        </Navbar.Brand>
        <Nav className="pt-0">
          <Nav.Link
            href="https://dashboard.kedoo.com/"
            target="_blank"
            className="ml-lg-2"
            active={false}
          >
            {formatMessage({ id: "commons.login" })}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
