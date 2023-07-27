import React from 'react';
import PropTypes from 'prop-types';

function Logo({ src, alt }) {
    return (
      <div className="logo-container">
        <img
          className="Logo"
          src={src}
          alt={alt}
        />
      </div>
    );
}

Logo.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

Logo.defaultProps = {
    alt: '',
};

export default Logo;
