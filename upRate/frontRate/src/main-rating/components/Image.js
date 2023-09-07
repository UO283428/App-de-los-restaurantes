import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, alt, className }) {
    return (
      <div className={className}>
        <img
          className="Image"
          src={src}
          alt={alt}
        />
      </div>
    );
}

// Prop types validation
Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
};

Image.defaultProps = {
    alt: 'Image', // default value if alt prop isn't provided
};

export default Image;