import React from 'react';
import PropTypes from 'prop-types';

function Image({ src, alt }) {
    return (
      <div className="image-container">
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
    alt: '', // default value if alt prop isn't provided
};

export default Image;
