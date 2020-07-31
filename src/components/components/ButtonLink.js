import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ className, to, children }) {
  return (
    <a className={className} href={to}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  href: '/',
  className: '',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;