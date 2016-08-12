import React, { PropTypes } from 'react';

const Display = ({ text }) => (
	<Text style={{fontSize: 72}}>
	{text}
    </Text>
)

Display.propTypes = {
    text: PropTypes.string.isRequired
}

export default Display
