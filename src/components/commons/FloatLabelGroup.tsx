import React from 'react';

import { Form } from 'react-bootstrap';

import classNames from 'classnames';

const FloatLabelGroup = ({ id, label, children, help = null, className = '' }) => {
  const [isFloating, setIsFloating] = React.useState(false);
  return (
    <Form.Group controlId={id} className={classNames('floating-label-group', className)}>
      {children &&
        React.cloneElement(children, {
          onFocus: (e) => {
            setIsFloating(true);
            children.props.onFocus && children.props.onFocus(e);
          },
          onBlur: (e) => {
            setIsFloating(!!e.target.value);
            children.props.onBlur && children.props.onBlur(e);
          }
        })}
      <label htmlFor={id} className={classNames({ active: isFloating })}>
        {label}
      </label>
      {help && <Form.Text className="text-danger">{help}</Form.Text>}
    </Form.Group>
  );
};

export default FloatLabelGroup;
