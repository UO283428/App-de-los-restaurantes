import React from 'react';
import PropTypes from 'prop-types';
import './styles/Link.css';

function Link({ src, url, alt, className }) {
    return (
    <div className={"link-container" + className }>
        <a href={url} >
          <img
          className="Image"
          src={src}
          alt={alt}
          />
        </a>
    </div>
    );
}

// Prop types validation
Link.propTypes = {
    src: PropTypes.string,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
};

Link.defaultProps = {
    alt: 'Image', // default value if alt prop isn't provided
    src: 'https://logos-world.net/wp-content/uploads/2022/01/Google-Maps-Logo.png',
    className: '',
};

export default Link;