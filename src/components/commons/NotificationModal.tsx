import React from 'react';

import { Modal, Button } from 'react-bootstrap';

import { useIntl } from 'react-intl';

const NotificationModal = ({ content, ...props }) => {
  const { formatMessage } = useIntl();
  return (
    <Modal {...props} aria-labelledby="notification-modal" centered size="lg">
      <Modal.Body>
        <h4 className="p-1 mb-0" dangerouslySetInnerHTML={{ __html: content }} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="link" onClick={props.onHide} className="text-dark">
          {formatMessage({ id: 'commons.close' })}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NotificationModal;
