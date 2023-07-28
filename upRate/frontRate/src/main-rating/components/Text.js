import React from 'react';
import PropTypes from 'prop-types';

function Text({ content, className }) {
    return (
    <div className= {className}>
        <p>{content}</p>
    </div>
    );
}

Text.propTypes = {
    content: PropTypes.string.isRequired,
};

export default Text;
