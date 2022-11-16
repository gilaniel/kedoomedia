import React from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap';
import TextareaAutosize from 'react-autosize-textarea';

import FloatLabelGroup from './FloatLabelGroup';
import NotificationModal from './NotificationModal';

import axios from 'axios';
import { useIntl } from 'react-intl';

const initialFormValues = { name: '', company: '', email: '', comment: '' };
const initialErrors = { name: false, company: false, email: false, comment: false };

const ContactForm = ({ buttonVariant = 'outline-light' }) => {
  const { formatMessage } = useIntl();

  const [notificationModalContent, setNotificationModalContent] = React.useState(null);
  const [values, setValues] = React.useState(initialFormValues);
  const [errors, setErrors] = React.useState(initialErrors);

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleFocus = ({ target: { name, value } }) => {
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      name: !values.name,
      email: !values.email
    };

    if (Object.keys(newErrors).reduce((result, key) => result || !!newErrors[key], false)) {
      setErrors({ ...errors, ...newErrors });
      return;
    }

    // send
    const data = [
      values.name && `Name: ${values.name}`,
      values.company && `Company: ${values.company}`,
      values.comment && `Comment: ${values.comment}`,
      `Email: ${values.email}`
    ]
      .filter(Boolean)
      .join('<br />');

    axios({
      method: 'post',
      url: '/api/account/sendmail',
      data: { data }
    })
      .then(() => {
        setValues(initialFormValues);
        setErrors(initialErrors);
        setNotificationModalContent(formatMessage({ id: 'contact_form.messages.contact_soon' }));
      })
      .catch(() => {
        setNotificationModalContent(formatMessage({ id: 'commons.errors.try_later' }));
      });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={9}>
            <Row>
              <Col md={4}>
                <FloatLabelGroup
                  id="contact-name"
                  label={formatMessage({ id: 'contact_form.labels.name' })}
                  help={errors.name && formatMessage({ id: 'commons.errors.required' })}
                >
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    value={values.name}
                    required
                  />
                </FloatLabelGroup>
              </Col>
              <Col md={4}>
                <FloatLabelGroup
                  id="contact-company"
                  label={formatMessage({ id: 'contact_form.labels.company' })}
                  help={errors.company && formatMessage({ id: 'commons.errors.required' })}
                >
                  <Form.Control
                    type="text"
                    name="company"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    value={values.company}
                  />
                </FloatLabelGroup>
              </Col>
              <Col md={4}>
                <FloatLabelGroup
                  id="contact-email"
                  label={formatMessage({ id: 'contact_form.labels.email' })}
                  help={errors.email && formatMessage({ id: 'commons.errors.required' })}
                >
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    value={values.email}
                    required
                  />
                </FloatLabelGroup>
              </Col>
              <Col md={4}>
                <FloatLabelGroup
                  id="contact-comment"
                  label={formatMessage({ id: 'contact_form.labels.comment' })}
                  help={errors.comment && formatMessage({ id: 'commons.errors.required' })}
                >
                  <Form.Control
                    as={TextareaAutosize}
                    type="comment"
                    name="comment"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    value={values.comment}
                    required
                  />
                </FloatLabelGroup>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Button type="submit" variant={buttonVariant} size="lg" block>
              {formatMessage({ id: 'contact_form.submit' })}
            </Button>
          </Col>
        </Row>
      </Form>
      <NotificationModal
        show={!!notificationModalContent}
        content={notificationModalContent}
        onHide={() => setNotificationModalContent(null)}
      />
    </>
  );
};

export default ContactForm;
