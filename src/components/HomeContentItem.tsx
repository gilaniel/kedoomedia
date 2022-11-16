import React from 'react';
import classNames from 'classnames';

import { Row, Col, Image } from 'react-bootstrap';

const HomeContentItem = ({ image, children, imgCenter = false, orderContentFirst = false }) => {
  return (
    <div className="content-item">
      <Row noGutters>
        <Col md={6} className={classNames({ 'text-center': imgCenter })}>
          <Image fluid src={image} />
        </Col>
        <Col
          md={{
            span: 6,
            order: orderContentFirst ? 'first' : null
          }}
          className="align-self-center"
        >
          <div
            className={classNames(
              'py-2 px-1 py-md-1',{
                'px-lg-3': !orderContentFirst ,
                'pl-lg-0 pr-lg-3': orderContentFirst
              }
            )}
          >
            {children}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeContentItem;
