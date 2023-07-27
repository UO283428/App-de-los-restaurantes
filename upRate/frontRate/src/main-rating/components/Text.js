import React from 'react';
import PropTypes from 'prop-types';

function Text({ content }) {
    return <p className="Text">{content}</p>;
}

Text.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Text;
