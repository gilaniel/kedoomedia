import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';

import SEO from '../components/commons/Seo';
import Footer from '../components/commons/Footer';
import Section from '../components/commons/Section';
import Link from '../components/LocaleLink';

const NotFoundContent = () => {
  const { formatMessage } = useIntl();
  return (
    <>
      <SEO title={formatMessage({ id: '404.title' })} className="kedoo-home" />
      <main className="pb-3">
        <Section className="pt-4 pb-2">
          <Container>
            <Row>
              <Col md={8} xl={7}>
                <h2>{formatMessage({ id: '404.main_section.title' })}</h2>
                <p className="mb-3">{formatMessage({ id: '404.main_section.content' })}</p>
                <Button as={Link} to="/" variant="outline-danger" size="lg">
                  {formatMessage({ id: '404.main_section.action_home' })}
                </Button>
              </Col>
            </Row>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default NotFoundContent;
