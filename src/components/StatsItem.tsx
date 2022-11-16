import React from 'react';
import classNames from 'classnames';

import { useIntl } from 'react-intl';

import { Col } from 'react-bootstrap';

const StatsItem = ({ color, value, sign = '', content }) => {
  const { formatNumberToParts } = useIntl();

  if (!sign) {
    const formatted = formatNumberToParts(value, { notation: 'compact', compactDisplay: 'short' });
    sign = formatted.pop().value;
    value = formatted
      .map(({ value }) => value)
      .join('')
      .trim();
  }

  return (
    <Col xs={6} md={3}>
      <div className="stats-item text-center">
        <p className={classNames('lead', color)}>
          {value}
          <small>{sign}</small>
        </p>
        <p>{content}</p>
      </div>
    </Col>
  );
};

export default StatsItem;
