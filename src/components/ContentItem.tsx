import React from 'react';
import classNames from 'classnames';

import { Row, Col, Image } from 'react-bootstrap';

const ContentItem = ({
  image = null,
  className = '',
  children,
  imgCenter = false,
  orderContentFirst = false
}) => {
  return (
    <div className={classNames('content-item mb-3', className)}>
      <Row>
        {image && (
          <Col md={6} className={classNames({ 'text-center': imgCenter })}>
            <Image fluid src={image} />
          </Col>
        )}
        <Col
          md={{
            span: 6,
            order: orderContentFirst ? 'first' : 'last'
          }}
          xs={{
            order: 'first'
          }}
        >
          {/* <div className="mb-2 pr-lg-4 h-100">{children}</div> */}
          <div className="mb-2 pr-lg-2 h-100">{children}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContentItem;
