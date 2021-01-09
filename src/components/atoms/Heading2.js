import React from 'react';
import classNames from 'classnames';

const Heading2 = ({ className, children }) => {
  return <h2 className={classNames('Heading2', className)}>{children}</h2>;
};

export default Heading2;
