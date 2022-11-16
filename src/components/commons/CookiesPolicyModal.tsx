import React from 'react';

import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'react-intl';
import Cookies from 'js-cookie';

import Link from '../LocaleLink';
import { Modal, Button } from 'react-bootstrap';

const hasAllowCookie = () => {
  const isAllow = Cookies.get('is_allow_cookies');
  return isAllow && isAllow === 'true';
};

const CookiesPolicyModal = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyrightTitle
        }
      }
    }
  `);

  const { formatMessage } = useIntl();
  const [isShow, setIsShow] = React.useState(!hasAllowCookie());

  const handleAccept = (e) => {
    Cookies.set('is_allow_cookies', true, { expires: 365 });
    setIsShow(false);
  };

  const handleClose = (e) => {
    setIsShow(false);
  };

  return (
    <Modal
      show={isShow}
      onHide={handleClose}
      aria-labelledby="cookies-policy-modal"
      backdrop="static"
      keyboard={false}
      centered
      size="lg"
    >
      <Modal.Body className="pt-2 px-2">
        <h4>{formatMessage({ id: 'cookies_policy_modal.title' })}</h4>
        <p className="lead">
          {formatMessage(
            { id: 'cookies_policy_modal.content' },
            {
              name: site.siteMetadata.copyrightTitle,
              link: <Link to="/help/cookies/">{formatMessage({ id: 'cookies.title' })}</Link>
            }
          )}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link" type="button" className="text-dark" onClick={handleClose}>
          {formatMessage({ id: 'commons.close' })}
        </Button>
        <Button variant="danger" type="button" onClick={handleAccept}>
          {formatMessage({ id: 'commons.accept' })}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CookiesPolicyModal;
