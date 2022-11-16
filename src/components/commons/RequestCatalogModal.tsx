import React from 'react';

import axios from 'axios';
import { useIntl } from 'react-intl';

import { Modal, Form, Button } from 'react-bootstrap';
import FloatLabelGroup from './FloatLabelGroup';
import NotificationModal from './NotificationModal';

const RequestCatalogModal = ({ catalogName, ...props }) => {
  const { formatMessage } = useIntl();
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState(false);
  const [notificationModalContent, setNotificationModalContent] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError(true);
      return;
    }

    axios({
      method: 'post',
      url: '/api/account/sendcatalogue',
      data: { email, catalogue: catalogName }
    })
      .then(() => {
        setNotificationModalContent(formatMessage({ id: 'request_catalog_modal.messages.contact_soon' }));
        props.onHide();
      })
      .catch(() => {
        setNotificationModalContent(formatMessage({ id: 'commons.errors.try_later' }));
      });
  };

  React.useEffect(() => {
    if (!props.show) setEmail('');
  }, [props.show]);

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="request-catalog-modal"
        className="request-catalog"
        centered
        // size="lg"
      >
        <Form onSubmit={handleSubmit}>
          <Modal.Body className="pt-2 px-2">
            <h4>{formatMessage({ id: 'request_catalog_modal.title' })}</h4>
            <FloatLabelGroup
              id="request-catalog-email"
              label={formatMessage({ id: 'request_catalog_modal.labels.email' })}
              help={emailError && formatMessage({ id: 'commons.errors.required' })}
            >
              <Form.Control
                type="email"
                name="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                required
              />
            </FloatLabelGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link" className="text-dark" onClick={props.onHide}>
              {formatMessage({ id: 'commons.close' })}
            </Button>
            <Button variant="danger" type="submit">
              {formatMessage({ id: 'commons.submit' })}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <NotificationModal
        show={!!notificationModalContent}
        content={notificationModalContent}
        onHide={() => setNotificationModalContent(null)}
      />
    </>
  );
};

export default RequestCatalogModal;
